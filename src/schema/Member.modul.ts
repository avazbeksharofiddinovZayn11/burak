import mongoose, {Schema} from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum.js";
// Schema first & Code first

const memberSchema = new Schema({
  MemberType: {
    type: String,
    enum: MemberType,
    default:MemberType.USER
  },
  memberStatus: {
    type: String,
    enum: MemberStatus,
    default: MemberStatus.ACTIVE,
  },
  
  memberNick: {
    type: String,
    index: {unique: true, sparse: true},
    required: true,
  },

  memberPhone: {
    typeL: String,
    index: {unique: true, sparse: true},
    required: true,
  },

  memberPassword: {
    typeL: String,
    select: false,
    required: true,
  },

   memberAdress: {
    typeL: String,
  },

  memberDesc: {
    typeL: String,
  },

  memberPoints: {
    typeL: Number,
    default: 0,
  },
},
{ timestamps: true} // updateAt, createAt
);

export default mongoose.model("Member", memberSchema);