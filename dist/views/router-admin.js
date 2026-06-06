"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerAdmin = express_1.default.Router();
const restaurant_controller_1 = __importDefault(require("../controllers/restaurant.controller"));
routerAdmin.get("/", restaurant_controller_1.default.goHome);
// Restaurant 
routerAdmin
    .get("/login", restaurant_controller_1.default.getLogin)
    .post("/login", restaurant_controller_1.default.processLogin);
routerAdmin
    .get("/signup", restaurant_controller_1.default.getSignup)
    .post("/signup", restaurant_controller_1.default.processSignup);
// Product
// User
exports.default = routerAdmin;
