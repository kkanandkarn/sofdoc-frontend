// src/validations/auth/index.js
import Joi from "joi";

const authSchema = {
  auth_login: Joi.object({
    username: Joi.string().trim().required().messages({
      "string.base": "Username should be a type of text",
      "any.required": "Username is required",
      "string.empty": "Username is required",
    }),
    password: Joi.string().trim().min(6).max(30).required().messages({
      "string.base": "Password should be a type of text",
      "string.min": "Password must be at least 6 characters long",
      "string.max": "Password must not exceed 30 characters",
      "any.required": "Password is required",
      "string.empty": "Password is required",
    }),
  }),
};
export default authSchema;
