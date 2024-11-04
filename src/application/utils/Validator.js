import { APPLICATION_ERRORS } from "../../constant/Error.js";

class Validator {
  validate(rawInput) {
    this.#validateEmpty(rawInput);
    this.#validateNumber(rawInput);
    this.#validateInteger(Number(rawInput));
    this.#validatePositive(Number(rawInput));
  }

  #validateEmpty(rawInput) {
    if (rawInput === null || rawInput === "") {
      throw new Error(APPLICATION_ERRORS.EMPTY);
    }
  }

  #validateNumber(rawInput) {
    if (isNaN(Number(rawInput))) {
      throw new Error(APPLICATION_ERRORS.NOT_A_NUMBER);
    }
  }

  #validateInteger(number) {
    if (!Number.isInteger(number)) {
      throw new Error(APPLICATION_ERRORS.NOT_INTEGER);
    }
  }

  #validatePositive(number) {
    if (number <= 0) {
      throw new Error(APPLICATION_ERRORS.NOT_POSITIVE);
    }
  }
}

export default Validator;
