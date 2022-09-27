import express from "express";
import dotenv from "dotenv";
import passport from "passport";

// private route authorization config
import privateRouteConfig from "./config/route.config";

// Database connection
import ConnectDB from "./database/connection";

// API connection
import Auth from "./api/auth";
import Food from "./api/food";
import Restaurant from "./api/restaurant";

dotenv.config();

const zomato = express();
const port = 4000;

// authoraization configuration
privateRouteConfig(passport);

zomato.use(express.json());
zomato.use(passport.initialize());

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

zomato.listen(port, () => {
  ConnectDB()
    .then(() => {
      console.log("Server run successful !! ");
    })
    .catch((error) => {
      console.log("Server run was success but database connection failed");
      console.log(error);
    });
});
