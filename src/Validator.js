class Validator {
  static validatePurchaseAmount(input) {
    const purchaseAmount = this.#convertToNumber(input);
    this.#checkAmountRange(purchaseAmount);
  }

  static #convertToNumber(input) {
    const number = Number(input);

    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }

    return number;
  }

  static #checkAmountRange(amount) {
    if (amount < 1000) {
      throw new Error('[ERROR] 구입 금액은 1,000원 이상이어야 합니다.');
    }

    if (amount > 100000) {
      throw new Error('[ERROR] 구입 금액은 100,000원을 넘을 수 없습니다.');
    }

    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
    }
  }
}

export default Validator;
