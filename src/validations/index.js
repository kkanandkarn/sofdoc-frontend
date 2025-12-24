import authSchema from "./auth";
import verifySchema from "./verify";

const schemas = {
  ...authSchema,
  ...verifySchema,
};

export const validate = (schemaName, data) => {
  const schema = schemas[schemaName];

  if (!schema) {
    console.error("no schema found");
    return;
  }

  const { error } = schema.validate(data, {
    abortEarly: false,
  });

  if (!error) return null;

  const errors = {};
  error.details.forEach((detail) => {
    const field = detail.path[0];
    errors[field] = detail.message;
  });

  return errors;
};
