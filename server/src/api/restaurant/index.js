import express from "express";

// database models
import { RestaurantModel } from "../../database/allModels";

//validations
import { validateId } from "../../validation/common.validation";
import {
  validatesearchString,
  validateRestaurantCity,
} from "../../validation/restaurant.validation";

const Router = express.Router();

/**
 * Route    /
 * Desc     Get restaurant based on particular city
 * Params   none
 * Access   Public
 * Method   GET
 */

Router.get("/", async (req, res) => {
  try {
    //`${process.env.REACT_APP_CLIENT_URL}restaurant/?city=ncr`
    const { city } = req.query;
    await validateRestaurantCity(req.query);
    const restaurants = await RestaurantModel.find({ city });
    if (restaurants.length === 0) {
      return res.status(404).json({
        error: `No restaurant found in ${city} !! `,
      });
    }
    return res.status(200).json({ restaurants });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route    /:_id
 * Desc     Get restaurant based on id
 * Params   _id
 * Access   Public
 * Method   GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validateId(req.params);
    const restaurant = await RestaurantModel.findById(_id);
    if (!restaurant) {
      return res.status(404).json({
        error: "No restaurant found !! ",
      });
    }
    return res.status(200).json({ restaurant });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route    /search/:searchString
 * Desc     Get restaurant details based on the searchString
 * Params   searchString
 * Access   Public
 * Method   GET
 */

Router.get("/search/:searchString", async (req, res) => {
  try {
    const { searchString } = req.params;
    await validatesearchString(req.params);
    const restaurants = await RestaurantModel.find({
      name: { $regex: searchString, $options: "i" },
    });
    if (restaurants.length === 0) {
      return res.status(404).json({
        error: `No restaurant found by searching ${searchString} `,
      });
    }
    return res.status(200).json({ restaurants });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/** Reference for the searchString route
 * searchString = Raj ( "i" : case insensitive )
 * results = {
 * Raj Restro
 * RamRaj
 * Raoraj
 * Rajaraj }}
 */

// Homework
/**
 * Route    /
 * Desc     Create new restaurant
 * Params   none
 * Access   Public
 * Method   POST
 */

export default Router;
