import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: String,
    mapLocation: String,
    phoneNumber: { type: Number, required: true },
    cuisine: [String],
    restautantTimings: String,
    website: String,
    popularDishes: [String],
    amenities: [String],
    averageCost: Number,
    menuImages: {
      type: mongoose.Types.ObjectId,
      ref: "images",
    },
    menu: {
      type: mongoose.Types.ObjectId,
      ref: "menus",
    },
    reviews: {
      type: mongoose.Types.ObjectId,
      ref: "reviews",
    },
    photos: {
      type: mongoose.Types.ObjectId,
      ref: "images",
    },
  },
  {
    timestamps: true,
  }
);

export const RestaurantModel = mongoose.model("restaurant", RestaurantSchema);
