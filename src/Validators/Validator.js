import CustomError from '../Utils/CustomError.js';

function validator(target, rules) {
  Object.values(rules).forEach((rule) => {
    if (!rule.isValid(target)) {
      throw new CustomError(rule.errorMessage);
    }
  });
}

export default validator;
