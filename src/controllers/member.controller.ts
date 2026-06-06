import { Request, Response } from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Members.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";

const memberService = new MemberService();


//REACT

const membercontroller: T = {};


membercontroller.signup = async (req: Request, res: Response) => {
  try{
    console.log("signup");
    const input: MemberInput = req.body,
    result: Member = await memberService.signup(input);
    // TOKENS

    res.json({member: result});
  } catch (err) {
    console.log("Error, signup", err);
    if (err instanceof Errors)
    res.status(err.code).json(err);
else
    res.status(Errors.standard.code).json(Errors.standard);
  }
    // res.json({});
  };

membercontroller.login = async (req: Request, res: Response) => {
  try{
    console.log("login");
    const input: LoginInput = req.body,
    result: Member = await memberService.login(input);

    // TOKENS

    res.json({member: result});
  } catch (err) {
    console.log("Error, login", err);
    if (err instanceof Errors)
    res.status(err.code).json(err);
else
    res.status(Errors.standard.code).json(Errors.standard);
    console.log(err);
  }
};

export default membercontroller;