class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#sortAscending(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (this.#isDuplicated(numbers)) {
      throw new Error("[ERROR] 로또 번호는 서로다른 숫자여야 합니다.");
    }

    if (this.#isOutOfRange(numbers)) {
      throw new Error("[ERROR] 로또 번호는 1~45사이 숫자여야 합니다.");
    }
  }

  #isDuplicated(numbers) {
    return new Set(numbers).size < numbers.length;
  }

  #isOutOfRange(numbers) {
    return numbers.some((number) => number > 45 || number < 1);
  }

  getNumbers() {
    return this.#numbers;
  }

  #sortAscending(numbers) {
    numbers.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
  }

  contains(winningNumber) {
    return this.#numbers.includes(winningNumber);
  }
}

export default Lotto;
