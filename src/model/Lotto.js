class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateNumbersCount(numbers);
    this.#validateNumbersType(numbers);
    this.#validateNumberUniqueness(numbers);
    this.#validateNumberRange(numbers);
  }
  #validateNumbersType(numbers) {
    if (numbers.some((number) => isNaN(number))) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
  }
  #validateNumbersCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 쉼표로 구분해서 6개여야 합니다.");
    }
  }
  #validateNumberUniqueness(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }
  #validateNumberRange(numbers) {
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error("[ERROR] 로또 번호는 1 ~ 45 사이의 양수여야 합니다.");
    }
  }
  getLottoNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
