class BettedMoney {
  #money;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
  }

  #validate(money) {
    this.#validateBlank(money);
    this.#validateNumber(money);
    this.#validateUnit(money);
  }

  #validateBlank(money) {
    if (money === "") throw new Error("공백은 입력될 수 없습니다.");
  }

  #validateNumber(money) {
    if (isNaN(money)) throw new Error("숫자를 입력해주세요.");
  }

  #validateUnit(money) {
    if (money % 1000 !== 0) throw new Error("1000단위의 숫자를 입력해주세요.");
  }
  // TODO: 추가 기능 구현
  getMoney() {
    return this.#money;
  }
  getMoneyToCount() {
    return this.#money / 1000;
  }
}

export default BettedMoney;
