class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.some((number) => isNaN(number))) {
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다');
    }
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.some((number) => number <= 0 || number > 45)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 힙니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
