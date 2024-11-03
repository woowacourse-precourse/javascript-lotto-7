export default class LottoIssuer {
  static #LOTTO_PRICE = 1000;

  static #ERROR_MESSAGE = Object.freeze({
    INVALID_AMOUNT: '[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.',
  });

  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
  }

  #validate(purchaseAmount) {
    const amount = Number(purchaseAmount);

    if (
      Number.isInteger(amount) &&
      amount > 0 &&
      amount % LottoIssuer.#LOTTO_PRICE === 0
    ) {
      this.#purchaseAmount = amount;
      return;
    }

    throw new Error(LottoIssuer.#ERROR_MESSAGE.INVALID_AMOUNT);
  }
}
