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
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에는 중복이 없어야 합니다.");
    }
    for (let num of numbers) {
      if (isNaN(num) || num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  static validateBonusNumber(bonus, numbers) {
    if (isNaN(bonus) || bonus < 1 || bonus > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (numbers.includes(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }
}

export default Lotto;
