class BuyLottoCountValidator {
  static validateBuyLottoCount(buyLottoCount) {
    this.isCharacter(buyLottoCount);
    this.isMultipleOfThousand(buyLottoCount);
    this.isNegative(buyLottoCount);
    this.isOverMaxNumber(buyLottoCount);
    this.isSpace(buyLottoCount);
  }

  static isCharacter(buyLottoCount) {
    if (isNaN(buyLottoCount)) {
      throw new Error('[ERROR] 구입 금액은 숫자를 입력해야 합니다.\n');
    }
  }

  static isMultipleOfThousand(buyLottoCount) {
    if (buyLottoCount % 1000 !== 0 || buyLottoCount === '0') {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.\n');
    }
  }

  static isNegative(buyLottoCount) {
    if (buyLottoCount < 0) {
      throw new Error('[ERROR] 구입 금액은 양수를 입력해야 합니다.\n');
    }
  }

  static isOverMaxNumber(buyLottoCount) {
    const MAX_NUM = Number.MAX_VALUE;

    if (buyLottoCount > MAX_NUM) {
      throw new Error('[ERROR] 구입 금액은 최대 구입 금액보다 적게 입력해야 합니다.\n');
    }
  }

  static isSpace(buyLottoCount) {
    if (buyLottoCount === '') {
      throw new Error('[ERROR] 로또 구입 금액은 최소 1,000원 이상 입력해야 합니다.\n');
    }
  }
}

export default BuyLottoCountValidator;
