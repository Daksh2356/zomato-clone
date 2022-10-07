import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";

// private route authorization config
import privateRouteConfig from "./config/route.config";

// Database connection
import ConnectDB from "./database/connection";

// API connection
import Auth from "./api/auth";
import Food from "./api/food";
import Restaurant from "./api/restaurant";
import User from "./api/user";
import Menu from "./api/menu";
import Order from "./api/order";
import Review from "./api/review";
import Image from "./api/images";

dotenv.config();

// authoraization configuration
privateRouteConfig(passport);

const zomato = express();
const port = 4000;

zomato.use(express.json());
zomato.use(
  session({
    secret: process.env.JWTSECRET,
    resave: true,
    saveUninitialized: true,
  })
);
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.get("/", (req, res) => {
  res.json({
    message: "Server is runnning successfully !! ",
  });
});

// API routes

// auth route
zomato.use("/auth", Auth);

// food route
zomato.use("/food", Food);

// restaurant route
zomato.use("/restaurant", Restaurant);

// user route
zomato.use("/user", User);

// menu route
zomato.use("/menu", Menu);

// order route
zomato.use("/order", Order);

// review route
zomato.use("/review", Review);

// review route
zomato.use("/image", Image);

zomato.listen(port, () => {
  ConnectDB()
    .then(() => {
      console.log("Server ran successfully !! ");
    })
    .catch((error) => {
      console.log("Server run was success but database connection failed");
      console.log(error);
    });
});
