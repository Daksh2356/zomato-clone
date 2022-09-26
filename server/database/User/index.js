import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

UserSchema.methods.generateJwtToken = function () {
  // at the time of signup and login
  return jwt.sign({ user: this._id }, "ZomatoApp");
};

// static/ helper methods

UserSchema.statics.findByEmailandPhone = async ({ email, phoneNumber }) => {
  // at the time of signup

  const checkUserEmail = await UserModel.findOne({ email });
  const checkUserPhone = await UserModel.findOne({ phoneNumber });

  if (checkUserEmail || checkUserPhone) {
    throw new Error("User already exists with those details !!!");
  }

  return false;
};

UserSchema.statics.findByEmailandPassword = async ({ email, password }) => {
  // at the time of login
  const user = await UserModel.findOne({ email });
  // password can't be used as it is in encrypted form

  if (!user) {
    throw new Error("User does not exist !! ");
  }

  // Compare passwords

  const doesPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) {
    throw new Error("Invalid credentails.");
  }

  return user;
};

UserSchema.pre("save", function (next) {
  // password is modified
  const user = this;
  if (!user.isModified("password")) return next();

  // generate bcrypt salt
  bcrypt.genSalt(8, (error, salt) => {
    if (error) return next(error);

    // hashing the password
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      // assigning the password
      user.password = hash;
      return next();
    });
  });
});

export const UserModel = mongoose.model("user", UserSchema);
