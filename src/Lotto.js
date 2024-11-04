class Lotto {
  #numbers;

  constructor(numbers, bonus) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#validateBonus(numbers, bonus);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    this.#validSameValue(numbers);
    for (let i = 0; i < numbers.length; i++) {
      this.#validNumber(numbers[i]);
    }
  }

  #validateBonus(numbers, bonus) {
    if (!(bonus >= 1 && bonus <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (numbers.includes(bonus)) {
      throw new Error(
        "[ERROR] 당첨 번호 추첨 시 6개의 숫자와 보너스번호 1개가 중복되지 않아야 합니다."
      );
    }
    this.#validNumber(bonus);
  }

  #validNumber(number) {
    const validBonus = Number(number);
    if (isNaN(validBonus)) {
      throw new Error(
        "[ERROR] 로또 번호는 쉼표(,)를 기준으로, 숫자를 입력해야 합니다."
      );
    }
  }

  #validSameValue(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(
        "[ERROR] 당첨 번호 추첨 시 6개의 숫자와 보너스번호 1개가 중복되지 않아야 합니다."
      );
    }
    if (!numbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
