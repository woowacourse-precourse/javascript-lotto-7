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

    for (let number of numbers) {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 입력값은 1과 45 사이의 숫자여야 합니다.");
      }
    }

    const numbersSet = new Set(numbers);
    if (numbersSet.size !== numbers.length)
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
  }

  getNumbers() {
    return this.#numbers;
  }

  getNumbersSet() {
    return new Set(this.#numbers);
  }
}

export default Lotto;
