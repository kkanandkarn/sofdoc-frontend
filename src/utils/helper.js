export const transformVariable = (variable) => {
  if (!variable) {
    return null;
  } else if (typeof variable === "string" && variable.trim() === "") {
    return null;
  } else if (typeof variable === "object") {
    return JSON.stringify(variable);
  } else {
    return variable;
  }
};
