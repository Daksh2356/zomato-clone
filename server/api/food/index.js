import express from "express";
import { FoodModel } from "../../database/allModels";

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
    const food = await FoodModel.findById(_id);
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
    const foods = await FoodModel.find({
      restaurant: _id,
    });
    return res.status(200).json({ foods });
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
    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });

    if (!foods) {
      return res.json({
        error: `No food item found for ${category} `,
      });
    }

    return res.status(200).json({ foods });
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
 * Params   none
 * Access   Public
 * Method   POST
 */

export default Router;
