class LottoMachine {
  #payment;

  constructor(payment) {
    this.#payment = payment;
  }

  #calculateAmount() {
    const payment = this.#payment;
    return payment / 1000;
  }
}

export default LottoMachine;
