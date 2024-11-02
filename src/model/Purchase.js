class Purchase {
  #amount;
  #lotteryNumbers;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 잘못된 구입 금액입니다.');
    }
    if (amount < 1000) {
      throw new Error('[ERROR] 구입 금액은 1000원 이상이어야 합니다.');
    }
  }
}

export default Purchase;
