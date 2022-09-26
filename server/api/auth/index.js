import express from "express";
import { UserModel } from "../../database/allModels";

const Router = express.Router();

Router.post("/signup", async (req, res) => {
  try {
    await UserModel.findByEmailandPhone(req.body.credentials);
    const newUser = UserModel.create(req.body.credentials);
    const token = newUser.generateJwtToken();
    res.status(200).json({
      token,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

Router.post("/login", async (req, res) => {});

export default Router;
