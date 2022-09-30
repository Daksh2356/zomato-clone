import express from "express";

import { ImageModel, MenuModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route    /list/:_id
 * Desc     Get a list of menus based on restaurant id
 * Params   _id
 * Access   Public
 * Method   GET
 */

Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await MenuModel.findById(_id);
    if (!menus) {
      return res.status(404).json({
        error: "No Menu present for this restaurant !! ",
      });
    }
    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

/**
 * Route    /image/:_id
 * Desc     Get a list of menu images based on id
 * Params   _id
 * Access   Public
 * Method   GET
 */

Router.get("/image/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menuImages = await ImageModel.findById(_id);
    if (!menuImages) {
      return res.status(404).json({
        error: "No Menu Images present here ",
      });
    }
    return res.json({ menuImages });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

export default Router;
