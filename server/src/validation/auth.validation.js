import joi, { object } from "joi";

export const validateSignup = (userData) => {
  const Schema = joi.object({
    fullName: joi.string().required().min(5).max(20),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    // can contain characters in the range a-z, A-Z, 0-9 and min no of characters would range from 3 and 30
    adress: joi
      .array()
      .items(joi.object({ details: joi.string(), for: joi.string() })),
    phoneNumber: joi.array().items(joi.number().min(10).max(10)),
  });

  return Schema.validateAsync(userData);
};

export const validateSignin = (userData) => {
  const Schema = joi.object({
    email: joi.string().email().required(),
    password: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    // can contain characters in the range a-z, A-Z, 0-9 and min no of characters would range frmo 3 and 30
  });

  return Schema.validateAsync(userData);
};
