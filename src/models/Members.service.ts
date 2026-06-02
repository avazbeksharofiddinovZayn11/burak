// import { MemberType } from "../libs/enums/member.enum.js";
import MemberModel from "../schema/Member.modul.js";
import { Member, MemberInput } from "../libs/types/member.js";
import Errors, { HttpCode, Message } from "../libs/Errors.js";
import { MemberType } from "../libs/enums/member.enum.js";


class Membercervice {
  private readonly memberModel;
  constructor() {
    this.memberModel = MemberModel;
  }
  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel.findOne({memberType: MemberType.RESTAURANT})
    .exec();
    console.log("exist:", exist);
    if(exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    
    
    try {
    const result = await this.memberModel.create(input);
    result.memberPassword = "";

    return result;
    } catch(err) {
    throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
    // console.log("Passed here");
  }
}

export default Membercervice;