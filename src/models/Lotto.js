class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLottoLength(numbers);
    this.#validateDuplicateNum(numbers);
  }

  #validateLottoLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateDuplicateNum(numbers) {
    const setNumbers = new Set(numbers);
    if (numbers.length !== setNumbers.size) {
      throw new Error("[ERROR] 로또 번호는 중복없이 입력되어야 합니다.");
    }
  }
}

export default Lotto;
