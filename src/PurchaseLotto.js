class PurchaseLotto {
  #quantity;

  constructor(money) {
    this.#quantity = this.#calculateQuantity(money);
  }

  #calculateQuantity(money) {
    return Math.floor(money / 1000);
  }

  getQuantity() {
    return this.#quantity;
  }
}

export default PurchaseLotto;
