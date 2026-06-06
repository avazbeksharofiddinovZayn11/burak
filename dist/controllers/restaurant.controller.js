"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Members_service_js_1 = __importDefault(require("../models/Members.service.js"));
const member_enum_js_1 = require("../libs/enums/member.enum.js");
const restaurantcontroller = {};
restaurantcontroller.goHome = (req, res) => {
    try {
        console.log("goHome");
        res.send("Home Page");
        // send | json | redirect | end | render
    }
    catch (err) {
        console.log("Error, goHome", err);
    }
};
restaurantcontroller.getLogin = (req, res) => {
    try {
        console.log("getLogin");
        res.send("Login Page");
    }
    catch (err) {
        console.log("Error, getLogin", err);
    }
};
restaurantcontroller.getSignup = (req, res) => {
    try {
        console.log("getSignup");
        res.send("Signup Page");
    }
    catch (err) {
        console.log("Error, getSignup", err);
    }
};
restaurantcontroller.processLogin = async (req, res) => {
    try {
        console.log("processLogin");
        console.log("body", req.body);
        const input = req.body;
        const memberService = new Members_service_js_1.default();
        const result = await memberService.processLogin(input);
        res.send(result);
    }
    catch (err) {
        console.log("Error, processLogin", err);
        throw err;
        console.log(err);
    }
};
restaurantcontroller.processSignup = async (req, res) => {
    try {
        console.log("processSignup");
        const newMember = req.body;
        newMember.memberType = member_enum_js_1.MemberType.RESTAURANT;
        const memberService = new Members_service_js_1.default();
        const result = await memberService.processSignup(newMember);
        res.send(result);
    }
    catch (err) {
        console.log("Error, processSignup", err);
        res.send(err);
    }
};
exports.default = restaurantcontroller;
