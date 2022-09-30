import express from "express";
import passport from "passport";
import { OrderModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route    /
 * Desc     Get all orders by user id
 * Params   none
 * Access   Private
 * Method   GET
 */

Router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req; // validated user id is given after authentication of the user
      const getOrders = await OrderModel.findOne({ user: user._id });
      if (!getOrders) {
        return res.status(404).json({
          error: "No orders found !! ",
        });
      }
      return res.json({ orders: getOrders });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }
);

export default Router;
