class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLottoNumbers(numbers);
    this.validateLottoDuplicate(numbers);
    this.validateLottoRange(numbers);
    this.#numbers = numbers;
  }

  validateLottoNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateLottoDuplicate(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 중복되는 숫자를 입력하실 수 없습니다.");
    }
  }

  validateLottoRange(numbers) {
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
