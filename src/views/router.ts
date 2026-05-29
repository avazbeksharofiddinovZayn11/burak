import express from "express";
const router = express.Router();
import membercontroller from "../controllers/member.controller.js";

router.get("/", membercontroller.goHome);

router.get("/login", membercontroller.getLogin);

router.get("/signup", membercontroller.getSignup);

export default router;
