import Joi from "joi";
export const transactionsSchema = Joi.object({
  total: Joi.number().required(),
  note: Joi.string().required(),
  time: Joi.date().required(),
  category: Joi.string().required(),
  userId: Joi.string().required(),
  images: Joi.array(),
});
