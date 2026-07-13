import Errors, { HttpCode } from "../libs/Errors";
import { T } from "../libs/types/common";
import { Response } from "express";
import { ExtendedRequest } from "../libs/types/member";
import OrderService from "../models/Order.service";

const orderService = new OrderService();
const orderController: T = {};

orderController.craeteOrder = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("craeteOrder");
    const result = await orderService.craeteOrder(req.member, req.body);

    res.status(HttpCode.CREATED).json({result})
  } catch (err) {
    console.log("Error, craeteOrder", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default orderController;
