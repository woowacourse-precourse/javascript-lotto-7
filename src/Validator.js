class Validator {
  static validatePurchaseAmount(input) {
    const purchaseAmount = this.#convertToNumber(input);
  }

  static #convertToNumber(input) {
    const number = Number(input);

    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }

    return number;
  }
}

export default Validator;
