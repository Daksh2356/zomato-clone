import joi from "joi";

export const validateRestaurantCity = (city) => {
  const Schema = joi.object({
    restroCity: joi.string().required(),
  });
  return Schema.validateAsync(city);
};

export const validatesearchString = (str) => {
  const Schema = joi.object({
    searchString: joi.string().required(),
  });
  return Schema.validateAsync(str);
};
