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
  auth_register: Joi.object({
    name: Joi.string().trim().required().messages({
      "string.base": "Name should be a type of text",
      "any.required": "Name is required",
      "string.empty": "Name is required",
    }),
    email: Joi.string().trim().required().messages({
      "string.base": "Email should be a type of text",
      "any.required": "Email is required",
      "string.empty": "Email is required",
    }),
    username: Joi.string().trim().required().messages({
      "string.base": "Username should be a type of text",
      "any.required": "Username is required",
      "string.empty": "Username is required",
    }),
  }),
  auth_tenant_register_org: Joi.object({
    organisationName: Joi.string().trim().required().messages({
      "any.required": "Organisation name is required",
      "string.empty": "Organisation name is required",
    }),
    organisationType: Joi.string().trim().required().messages({
      "any.required": "Organisation type is required",
      "string.empty": "Organisation type is required",
    }),
    industry: Joi.string().trim().required().messages({
      "any.required": "Industry is required",
      "string.empty": "Industry is required",
    }),
  }),
  auth_tenant_register_user: Joi.object({
    name: Joi.string().trim().required().messages({
      "any.required": "Name is required",
      "string.empty": "Name is required",
    }),
    email: Joi.string().trim().required().messages({
      "any.required": "Email is required",
      "string.empty": "Email is required",
    }),
    username: Joi.string().trim().required().messages({
      "any.required": "Username is required",
      "string.empty": "Username is required",
    }),
  }),
};
export default authSchema;
