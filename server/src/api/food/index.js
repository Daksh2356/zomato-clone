import express from "express";
import { FoodModel } from "../../database/allModels";
import {
  validateCategory,
  validateId,
} from "../../validation/common.validation";

const Router = express.Router();

/**
 * Route    /:_id
 * Desc     Get food based on id
 * Params   _id
 * Access   Public
 * Method   GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validateId(req.params);
    const food = await FoodModel.findById(_id);
    if (!food) {
      return res.status(404).jsonjson({
        error: `No food item found of this ID - ${_id} `,
      });
    }
    return res.status(200).json({ food });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route    /r/:_id
 * Desc     Get food based on particular restaurant
 * Params   _id
 * Access   Public
 * Method   GET
 */

Router.get("/r/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validateId(req.params);
    const food = await FoodModel.find({
      restaurant: _id,
    });
    if (!food) {
      return res.status(404).jsonjson({
        error: "No food item found ",
      });
    }
    return res.status(200).json({ food });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route    /c/:category
 * Desc     Get food based on particular category
 * Params   category
 * Access   Public
 * Method   GET
 */

Router.get("/c/:category", async (req, res) => {
  try {
    const { category } = req.params;
    await validateCategory(req.params);
    const food = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });

    if (!food) {
      return res.status(404).json({
        error: `No food item found for ${category} `,
      });
    }

    return res.status(200).json({ food });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

//  Reference for the regex ( regular expression )
//  If regex contains "non-veg" and is of case "i", then all strings - "non" ,"veg" , "Non-VeG" , "non-VEG", etc. would be accepted

// Homework
/**
 * Route    /:_id
 * Desc     Create a new Food item
 * Params   _id
 * Access   Public
 * Method   POST
 */

export default Router;
