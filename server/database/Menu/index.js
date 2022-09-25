import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema(
  {
    menus: [
      {
        name: { type: String, required: true },
        items: [
          {
            type: mongoose.Types.ObjectId,
            ref: "foods",
          },
        ],
      },
    ],
    recommended: {
      type: mongoose.Types.ObjectId,
      ref: "foods",
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default MenuModel = mongoose.model("menu", MenuSchema);
