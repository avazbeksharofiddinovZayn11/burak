import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./views/router.js";

// __dirname ni yasash
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1 Extrance
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// 2 Sessions

// 3 Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routers
app.use("/", router)  // Middleware Design Pettern



export default app;