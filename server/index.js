import express from "express";
import dotenv from "dotenv";

// Database connection
import ConnectDB from "../server/database/connection";

import Auth from "./api/auth/index";

dotenv.config();

const zomato = express();
const port = 4000;

zomato.use(express.json());

zomato.get("/", (req, res) => {
  res.json({
    message: "Server is runnning successfully !! ",
  });
});

// /auth/signup
zomato.use("/auth", Auth);

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
