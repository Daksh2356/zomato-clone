import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    isVeg: { type: Boolean, required: true },
    ContainsEgg: { type: Boolean, required: true },
    category: { type: String, required: true },
    price: { type: Number, default: 150, required: true },
    photos: { type: mongoose.Types.ObjectId, ref: "images" },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurants",
      required: true,
    },
    addOns: [
      {
        type: mongoose.Types.ObjectId,
        ref: "foods",
      },
    ],
  },
  {
    timestamps: "true",
  }
);

export const FoodModel = mongoose.model("food", FoodSchema);
