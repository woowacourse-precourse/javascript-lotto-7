class Validator {
  #ERROR_PREFIX = '[ERROR] ';

  #validateNaturalNumber(value) {
    if (Number.isInteger(value) && value > 0) {
      throw Error(`${this.#ERROR_PREFIX} 자연`);
    }
  }

  purchaseAmount(value) {
    this.#validateNaturalNumber(value);
  }
}

export default Validator;
