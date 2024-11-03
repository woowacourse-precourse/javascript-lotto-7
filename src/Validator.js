class Validator {
  #validateNaturalNumber(value) {
    if (Number.isInteger(value) && value > 0) {
      throw Error(`${ERROR_PREFIX} 자연`);
    }
  }

  purchaseAmount(value) {
    this.#validateNaturalNumber(value);
  }
}

export default Validator;
