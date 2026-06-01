import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./views/router.js";
import routerAdmin from "./views/router-admin.js";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config.js";



// __dirname ni yasash
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1 Extrance
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));
// 2 Sessions

// 3 Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routers
app.use("/admin", routerAdmin); // SSR: EJS
app.use("/", router);           // SPA: REACT


export default app;