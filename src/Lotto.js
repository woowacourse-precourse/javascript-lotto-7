class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    // 번호 개수가 6개인지 확인
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    // 번호에 중복된 숫자가 있는지 확인
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
    // 번호가 1~45 범위를 벗어나지 않는지 확인
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getMatchCount(winningNumbers) {
    return this.#numbers.filter((num) => winningNumbers.includes(num)).length;
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
