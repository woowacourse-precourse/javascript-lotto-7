class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateRange(numbers);
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
}

export default Lotto;
