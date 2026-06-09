import express from "express";
import path from "path";
import router from "./views/router";
import routerAdmin from "./views/router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB, { MongoDBStore } from "connect-mongodb-session";

const MongoStore = ConnectMongoDB(session);
var store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "mySessions",
});

// 1 Extrance
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));
// 2 Sessions

app.use(session({
  secret: String(process.env.SESSION_SECRET),
  cookie: {
    maxAge: 1000 * 3600 * 3, // 3 hours
  },
  store: store,
  resave: true,
  saveUninitialized: true,
})
);


// 3 Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routers
app.use("/admin", routerAdmin); // SSR: EJS
app.use("/", router);           // SPA: REACT


export default app;