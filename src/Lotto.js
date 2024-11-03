class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이여야 합니다.");
    }
  }
  get numbers() {
    return this.#numbers;
  }

  toString() {
    return `[${this.#numbers.join(", ")}]`;
  }

  lotto_match(lotto_answer) {
    return this.#numbers.filter((number) => lotto_answer.includes(number))
      .length;
  }

  lotto_bonus(lotto_bonus) {
    return this.#numbers.includes(lotto_bonus);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
