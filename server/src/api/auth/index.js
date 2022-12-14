import express from "express";
import passport from "passport";

// database models
import { UserModel } from "../../database/allModels";

// validations
import {
  validateSignin,
  validateSignup,
} from "../../validation/auth.validation";

const Router = express.Router();

/**
 * Route    /signup
 * Desc     Create new account
 * Params   none
 * Access   Public
 * Method   POST
 */

Router.post("/signup", async (req, res) => {
  try {
    await validateSignup(req.body.credentials);
    await UserModel.findByEmailAndPhone(req.body.credentials);
    const newUser = await UserModel.create(req.body.credentials);
    const token = newUser.generateJwtToken();
    return res.status(200).json({
      token,
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route    /signin
 * Desc     login to existing account
 * Params   none
 * Access   Public
 * Method   POST
 */

Router.post("/signin", async (req, res) => {
  try {
    await validateSignin(req.body.credentials);
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    const token = user.generateJwtToken();
    return res.status(200).json({
      token,
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    return res.redirect(
      `http://localhost:3000/google/${req.session.passport.user.token}`
    );
  }
);

export default Router;
