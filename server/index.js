import express from "express";
import dotenv from "dotenv";

// Database connection
import ConnectDB from "./database/connection";

// API connection
import Auth from "./api/auth";
import Food from "./api/food";
import Restaurant from "./api/restaurant";

dotenv.config();

const zomato = express();
const port = 4000;

zomato.use(express.json());

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
