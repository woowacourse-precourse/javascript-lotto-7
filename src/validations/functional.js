// src/validation/functional.js

export const composeValidator =
  (...validators) =>
  (input) => {
    validators.forEach((validator) => validator(input));
    return input;
  };
