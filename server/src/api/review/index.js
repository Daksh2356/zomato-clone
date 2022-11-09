import express from "express";
import passport from "passport";

// database models
import { ReviewModel } from "../../database/allModels";

// validations
import { validateId } from "../../validation/common.validation";

const Router = express.Router();

/**
 * Route    /:resId
 * Desc     Get all review for a particular restaurant
 * Params   resId
 * Access   Public
 * Method   GET
 */

Router.get("/:resId", async (req, res) => {
  try {
    const { resId } = req.params;
    const review = await ReviewModel.find({ restaurant: resId }).sort({
      createdAt: -1,
    });
    if (!review) {
      return res.status(404).json({
        error: " No reviews found !!  ",
      });
    }
    return res.status(200).json({ review });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route    /new
 * Desc     Add new food/restaurant review and rating
 * Params   none
 * Access   Private
 * Method   POST
 */

Router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.user;
      const { reviewData } = req.body;
      const review = await ReviewModel.create({ ...reviewData, user: _id });
      if (!review) {
        return res.status(404).json({
          error: " No reviews found !!  ",
        });
      }
      return res.status(200).json({ review });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }
);

/**
 * Route    /delete/:id
 * Desc     Delete a particular review
 * Params   _id
 * Access   Private
 * Method   DELETE
 */

Router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req;
      const { id } = req.params;
      await validateId(req.params);

      const data = await ReviewModel.findOneAndDelete({
        _id: id,
        user: user._id,
      });

      if (!data) {
        return res.json({ message: "Review was not deleted ", data });
      }
      return res.json({ message: "Successfully deleted the review.", data });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }
);

export default Router;
