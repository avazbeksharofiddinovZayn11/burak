import { ObjectId } from "mongoose";

export interface OrderItem {
  _id: ObjectId;
  itemQuantity: number;
  itemPrice: ObjectId;
  productId: ObjectId;
  craetedAt: Date;
  updatedAt: Date;
}

export interface Order {
  _id: ObjectId;
  orderTotal: number;
  orderDelivery: number;
  memberId: ObjectId;
  craetedAt: Date;
  updatedAt: Date;
}

export interface OrderItemInput {
  itemQuantity: number;
  itemPrice: number;
  productId: ObjectId;
  orderId?: ObjectId;
}