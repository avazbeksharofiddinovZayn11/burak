import { Request, Response } from "express";
import {T} from "../libs/types/common.js";



const restaurantcontroller: T = {};
restaurantcontroller.goHome = (req: Request, res: Response) => {
  try{
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome", err);
  }
  };

  restaurantcontroller.getLogin = (req: Request, res: Response) => {
  try{
    res.send("Login Page");
  } catch (err) {
    console.log("Error, getLogin", err);
  }
};

  restaurantcontroller.getSignup = (req: Request, res: Response) => {
  try{
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, getSignup", err);
  }
};

export default restaurantcontroller;