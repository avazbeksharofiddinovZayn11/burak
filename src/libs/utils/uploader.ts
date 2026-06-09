import path from "path";
import multer from "multer";
// @ts-ignore: missing uuid types
import { v4 } from "uuid";

const product_storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/products");
  },
  filename: function (req, file, cb) {
    const extension = path.parse(file.originalname).ext;
    const random_name = v4() + extension;
    cb(null, random_name);
  },
});
export const uploadProductImage = multer({ storage: product_storage });
