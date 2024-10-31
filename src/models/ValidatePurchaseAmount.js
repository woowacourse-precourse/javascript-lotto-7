class ValidatePurchaseAmount {
  #validateIsNumber(input) {
    if (Number.isNaN(Number(input))) {
      throw new Error('[ERROR] 숫자만 입력이 가능합니다.');
    }

    return Number(input);
  }

  #validateThousandUnit(input) {
    if (input % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해주셔야 됩니다.');
    }
  }

  validatePurchaseAmount(input) {
    this.#validateIsNumber(input);
    this.#validateThousandUnit(input);
  }
}

export default ValidatePurchaseAmount;
