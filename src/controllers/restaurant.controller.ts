import { Request, Response } from "express";
import {T} from "../libs/types/common.js";
import MemberService from "../models/Members.service.js";
import { LoginInput, MemberInput } from "../libs/types/member.js";
import { MemberType } from "../libs/enums/member.enum.js";



const restaurantcontroller: T = {};
restaurantcontroller.goHome = (req: Request, res: Response) => {
  try{
    console.log("goHome")
    res.send("Home Page");
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Error, goHome", err);
  }
  };

  restaurantcontroller.getLogin = (req: Request, res: Response) => {
  try{
    console.log("getLogin")
    res.send("Login Page");
  } catch (err) {
    console.log("Error, getLogin", err);
  }
};

  restaurantcontroller.getSignup = (req: Request, res: Response) => {
  try{
    console.log("getSignup")
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, getSignup", err);
  }
};

restaurantcontroller.processLogin = async (req: Request, res: Response) => {
  try{
    console.log("processLogin");
    console.log("body", req.body);
    const input: LoginInput = req.body;

    const memberService = new MemberService();
    const result = await memberService.processLogin(input);

    res.send(result);
  } catch (err) {
    console.log("Error, processLogin", err);
    throw err;
    console.log(err)
  }
};

restaurantcontroller.processSignup = async (req: Request, res: Response) => {
  try{
    console.log("processSignup");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);
    res.send(result)
  } catch (err) {
    console.log("Error, processSignup", err);
    res.send(err);
  }
};

export default restaurantcontroller;