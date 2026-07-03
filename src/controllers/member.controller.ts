import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Members.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/config";

const memberService = new MemberService();
const authService = new AuthService();

//REACT

const membercontroller: T = {};

membercontroller.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);
    const token = await authService.createToken(result);

    // TOKENS
    res.cookie("accessToken", token, {
      maxAge: AUTH_TIMER * 3600 * 1000, // 1 hour 
      httpOnly: true,
    });

    res.status(HttpCode.CREATED).json({ member: result, accessToken: token });
  } catch (err) {
    console.log("Error, signup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
  // res.json({});
};

membercontroller.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    const input: LoginInput = req.body,
      result: Member = await memberService.login(input),
      token = await authService.createToken(result);

    // TOKENS
    res.cookie("accessToken", token, {
      maxAge: AUTH_TIMER * 3600 * 1000, // 1 hour 
      httpOnly: true,
    });

    res.status(HttpCode.OK).json({ member: result, ascessToken: token });
  } catch (err) {
    console.log("Error, login", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    console.log(err);
  }
};

membercontroller.verifyAuth = async (req: Request, res: Response) => {
  try {
    let member = null;
    const token = req.cookies["accessToken"];
    if (token) member = await authService.verifyAuth(token);

    if (!member) throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);
    res.status(HttpCode.OK).json({ member: member });
  } catch (err) {
    console.log("Error, verifyAuth", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default membercontroller;
