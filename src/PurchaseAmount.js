class PurchaseAmount {
  #amount;
  #LOTTO_PRICE = 1000;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    this.#validateNumber(amount);
    this.#validateMinAmount(amount);
    this.#validateDivisibleAmount(amount);
  }

  #validateNumber(amount) {
    if (isNaN(amount)) {
      throw new Error("[ERROR] 구매 금액은 숫자여야 합니다.");
    }
  }

  #validateMinAmount(amount) {
    if (amount < this.#LOTTO_PRICE) {
      throw new Error("[ERROR] 구매 금액은 1000원 이상이어야 합니다.");
    }
  }

  #validateDivisibleAmount(amount) {
    if (amount % this.#LOTTO_PRICE !== 0) {
      throw new Error("[ERROR] 구매 금액은 1000원 단위여야 합니다.");
    }
  }

  getAmount() {
    return this.#amount / this.#LOTTO_PRICE;
  }
}

export default PurchaseAmount;