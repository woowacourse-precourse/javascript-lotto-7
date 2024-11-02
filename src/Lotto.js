const ERROR_MESSAGES = {
  LOTTO_NUMBER_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  LOTTO_NUMBER_DUPLICATE: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  LOTTO_NUMBER_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
};

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.LOTTO_NUMBER_COUNT);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGES.LOTTO_NUMBER_DUPLICATE);
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error(ERROR_MESSAGES.LOTTO_NUMBER_RANGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  matches(winningNumbers) {
    return this.#numbers.filter((num) => winningNumbers.includes(num)).length;
  }

  includesBonus(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
