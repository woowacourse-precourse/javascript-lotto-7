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

    const numberSet = new Set();
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
      if (numberSet.has(number)) {
        throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
      }
      numberSet.add(number);
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;