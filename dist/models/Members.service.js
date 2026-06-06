"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { MemberType } from "../libs/enums/member.enum.js";
const Member_modul_1 = __importDefault(require("../schema/Member.modul"));
const Errors_1 = __importStar(require("../libs/Errors"));
const member_enum_1 = require("../libs/enums/member.enum");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class Membercervice {
    constructor() {
        this.memberModel = Member_modul_1.default;
    }
    async processSignup(input) {
        const exist = await this.memberModel.findOne({ memberType: member_enum_1.MemberType.RESTAURANT })
            .exec();
        console.log("exist:", exist);
        if (exist)
            throw new Errors_1.default(Errors_1.HttpCode.BAD_REQUEST, Errors_1.Message.CREATE_FAILED);
        console.log("before", input.memberPassword);
        const salt = await bcryptjs_1.default.genSalt();
        input.memberPassword = await bcryptjs_1.default.hash(input.memberPassword, salt);
        console.log("after", input.memberPassword);
        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result;
        }
        catch (err) {
            throw new Errors_1.default(Errors_1.HttpCode.BAD_REQUEST, Errors_1.Message.CREATE_FAILED);
        }
        // console.log("Passed here");
    }
    async processLogin(input) {
        const member = await this.memberModel.findOne({ memberNick: input.memberNick }, { memberNick: 1, memberPassword: 1 })
            .exec();
        if (!member)
            throw new Errors_1.default(Errors_1.HttpCode.NOT_FOUND, Errors_1.Message.NO_MEMBER_NICK);
        const isMatch = await bcryptjs_1.default.compare(input.memberPassword, member.memberPassword);
        // const isMatch = input.memberPassword === member.memberPassword;
        if (!isMatch) {
            throw new Errors_1.default(Errors_1.HttpCode.UNAUTHORIZED, Errors_1.Message.WRONG_PASSWORD);
        }
        const result = await this.memberModel.findById(member._id).exec();
        if (!result)
            throw new Errors_1.default(Errors_1.HttpCode.NOT_FOUND, Errors_1.Message.NO_MEMBER_NICK);
        return result;
    }
}
exports.default = Membercervice;
