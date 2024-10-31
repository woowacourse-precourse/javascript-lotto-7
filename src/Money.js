class Money {
  #money;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
  }

  #validate(money) {
    this.#validateNotEmpty(money);
    this.#validateNumberType(money);
    this.#validateInBoundary(money);
    this.#validateDivideBy1000(money);
  }

  #validateNotEmpty(money) {
    if (money === null || money === '') {
      throw new Error('[ERROR]');
    }
  }

  #validateNumberType(money) {
    if (Number.isNaN(Number(money))) {
      throw new Error('[ERROR]');
    }

    if (Number.isInteger(money) === false) {
      throw new Error('[ERROR]');
    }
  }

  #validateInBoundary(money) {
    if (money <= 0 || money > Number.MAX_SAFE_INTEGER) {
      throw new Error('[ERROR]');
    }
  }

  #validateDivideBy1000(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR]');
    }
  }
}

export default Money;
