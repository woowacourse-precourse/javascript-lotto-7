class LottoNumber {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = Number(number);
  }

  #validate(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.");
    }
  }

  get number() {
    return this.#number;
  }
}

export default LottoNumber;
