const errorMessage = {
  "any.required": " must be required.",
  "string.empty": " cannot be an empty field.",
  "string.base": " must be a text type.",
  "string.min": " must be equal or greater than 5.",
  "string.max": " must be equal or less than 50.",
  "number.integer": " must be a integer number",
  "boolean.base": " must be a boolean type",
  "number.min": " must be equal or greater than 1",
  "number.max": " must be equal or less than 150",
};

module.exports = function (label = "", type = "") {
  return `${label}${errorMessage[type]}`;
};
