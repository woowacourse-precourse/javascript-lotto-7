class LottoMachine {
  #amount;

  constructor(input) {
    this.#validate(Number(input));
    this.#amount = Number(input);
  }

  #validate(number) {
    if (Number.isNaN(number)) {
      throw new Error("[ERROR] 구입 금액은 숫자만 입력 가능합니다.");
    }
    if (number % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력할 수 있습니다.");
    }
  }
}

export default LottoMachine;
