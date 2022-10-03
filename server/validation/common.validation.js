import joi from "joi";

export const validateId = (id) => {
  const Schema = joi.object({
    _id: joi.string().required(),
  });
  return Schema.validateAsync(id);
};

export const validateCategory = (cat) => {
  const Schema = joi.object({
    category: joi.string().required(),
  });
  return Schema.validateAsync(cat);
};