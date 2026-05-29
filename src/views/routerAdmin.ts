import express from "express";
const routerAdmin = express.Router();
import restaurantcontroller from "../controllers/restaurant.controller.js";

routerAdmin.get("/", restaurantcontroller.goHome);

routerAdmin.get("/login", restaurantcontroller.getLogin);

routerAdmin.get("/signup", restaurantcontroller.getSignup);

export default routerAdmin;
