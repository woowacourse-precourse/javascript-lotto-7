import CustomError from '../Utils/CustomError.js';

class Validator {
  #rules;
  constructor(rules) {
    this.#rules = rules;
  }

  validate(target) {
    Object.values(this.#rules).forEach(rule => {
      if (!rule.isValid(target)) {
        throw new CustomError(rule.errorMessage);
      }
    });
  }
}

export default Validator;
