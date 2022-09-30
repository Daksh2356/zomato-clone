import express from "express";
import { UserModel } from "../../database/User";
import passport from "passport";

const Router = express.Router();

/**
 * Route    /
 * Desc     Get details of an authorized user
 * Params   none
 * Access   Private
 * Method   GET
 */

Router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { email, fullName, phoneNumber, address } = req.user;
      return res.status(200).json({
        user: { email, fullName, phoneNumber, address },
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }
);

/**
 * Route    /:_id
 * Desc     Get user data (For the review system)
 * Params   _id
 * Access   Public
 * Method   GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const getUser = await UserModel.findById(_id);
    if (!getUser) {
      return res.status(404).json({
        error: "User not found !!",
      });
    }
    const { fullName } = getUser;
    return res.status(200).json({
      user: { fullName },
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route    /update/:_id
 * Desc     update user data
 * Params   _id
 * Access   Private
 * Method   PUT
 */

Router.put(
  "/update/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.params;
      const { userData } = req.body; // fields that user wants to update
      if (!userData) {
        return res.status(404).json({
          error: "User not found !!",
        });
      }
      userData.password = undefined;
      const updateUserData = await UserModel.findByIdAndUpdate(
        _id,
        {
          $set: userData,
        },
        {
          new: true,
        }
      );

      return res.status(200).json({
        user: updateUserData,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
);

export default Router;
