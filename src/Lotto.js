class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateRange(numbers);
    this.#validateDuplicates(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateRange(numbers) {
    const isInvalid = numbers.some(
      number => !Number.isInteger(number) || number < 1 || number > 45
    );
    if (isInvalid) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  #validateDuplicates(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있을 수 없습니다.");
    }
  }

  getNumbers() {
    return [...this.#numbers].sort((a, b) => a - b);
  }
}

export default Lotto;
