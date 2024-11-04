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
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getMatchCount(winningNumbers) {
    // 당첨 번호와 일치하는 숫자의 개수를 반환
    return this.#numbers.filter((num) => winningNumbers.includes(num)).length;
  }

  hasNumber(number) {
    // 특정 번호가 로또 번호에 포함되어 있는지 확인
    return this.#numbers.includes(number);
  }
}

export default Lotto;
