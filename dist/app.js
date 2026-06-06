"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router_1 = __importDefault(require("./views/router"));
const router_admin_1 = __importDefault(require("./views/router-admin"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = require("./libs/config");
// __dirname ni yasash
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// 1 Extrance
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, morgan_1.default)(config_1.MORGAN_FORMAT));
// 2 Sessions
// 3 Views
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
// Routers
app.use("/admin", router_admin_1.default); // SSR: EJS
app.use("/", router_1.default); // SPA: REACT
exports.default = app;
