import express from "express";
const routerAdmin = express.Router();
import restaurantcontroller from "../controllers/restaurant.controller.js";

routerAdmin.get("/", restaurantcontroller.goHome);
// Restaurant 
routerAdmin
.get("/login", restaurantcontroller.getLogin)
.post("/login", restaurantcontroller.processLogin);

routerAdmin
.get("/signup", restaurantcontroller.getSignup)
.post("/signup", restaurantcontroller.processSignup);

// Product

// User

export default routerAdmin;
