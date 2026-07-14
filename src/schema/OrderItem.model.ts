import mongoose, {Schema} from "mongoose";

const orderItemSchema = new Schema({
  itemQuantity: {
    type: Number,
    required: true,
  },

  itemPrice: {
    type: Number,
    required: true,
  },

  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },

  orderId: {
  type: Schema.Types.ObjectId,
  ref: "Order",
  required: true,
},

}, {timestamps: true, collection: "orderItems"},
); 

export default mongoose.model("OrderItem", orderItemSchema)