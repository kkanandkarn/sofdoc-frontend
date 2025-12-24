// src/validations/auth/index.js
import Joi from "joi";

const verifySchema = {
  registration_request: Joi.object({
    password: Joi.string().trim().min(6).max(30).required().messages({
      "string.base": "Password should be a type of text",
      "string.min": "Password must be at least 6 characters long",
      "string.max": "Password must not exceed 30 characters",
      "any.required": "Password is required",
      "string.empty": "Password is required",
    }),
    confirmPassword: Joi.string().trim().min(6).max(30).required().messages({
      "string.base": "Confirm Password should be a type of text",
      "string.min": "Confirm Password must be at least 6 characters long",
      "string.max": "Confirm Password must not exceed 30 characters",
      "any.required": "Confirm Password is required",
      "string.empty": "Confirm Password is required",
    }),
  }),
};
export default verifySchema;
