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
    this.#validateNumberRange(numbers);
    this.#validateDuplicateNumber(numbers);
  }

  // TODO: 추가 기능 구현
  #validateNumberRange(numbers) {
    const NUMBER_RANGE_ERROR =
      "[ERROR] 로또 번호의 숫자 범위는 1~45까지 입니다.";
    if (numbers < 1 || numbers > 45) {
      throw new Error(NUMBER_RANGE_ERROR);
    }
  }

  #validateDuplicateNumber(numbers) {
    const DUPLICATE_NUMBER_ERROR =
      "[ERROR] 중복되지 않는 숫자를 입력해야 합니다.";
    if (numbers.some((item, index) => numbers.indexOf(item) !== index)) {
      throw new Error(DUPLICATE_NUMBER_ERROR);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
