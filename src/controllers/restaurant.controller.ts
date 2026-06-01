import { Request, Response } from "express";
import {T} from "../libs/types/common.js";
import MemberService from "../models/Members.service.js"



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

restaurantcontroller.processLogin = (req: Request, res: Response) => {
  try{
    console.log("processLogin");
    res.send("DONE");
  } catch (err) {
    console.log("Error, processLogin", err);
  }
};

restaurantcontroller.processSignup = (req: Request, res: Response) => {
  try{
    console.log("processSignup");
    res.send("DONE");
  } catch (err) {
    console.log("Error, processSignup", err);
  }
};

export default restaurantcontroller;