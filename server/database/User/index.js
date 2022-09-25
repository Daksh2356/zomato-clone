import mongoose from "mongoose";
import { userModel } from "../allModels";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [
      {
        details: String,
        for: String,
      },
    ],
    phoneNumber: [Number],
  },
  {
    timestamps: true,
  }
);

// attachments ( user- defined/ custom methods )
UserSchema.methods.generateJwtToken = function () {};

// static/ helper methods

UserSchema.statics.findByEmailandPhone = async () => {};

UserSchema.statics.findByEmailandPassword = async () => {};

export default UserModel = mongoose.model("user", UserSchema);
