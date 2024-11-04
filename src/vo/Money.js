class Money {
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = Number(amount);
  }

  getAmount() {
    return this.#amount;
  }

  #validate(amount) {}
}

export default Money;
