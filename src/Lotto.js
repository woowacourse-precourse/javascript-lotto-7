class Lotto {
  #numbers;

  constructor(numbers = null) {
    if (!numbers) {
      this.#numbers = this.generateNumbers();
    } else {
      this.#validate(numbers);
      this.#numbers = numbers;
    }
  }

  generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      const number = Math.floor(Math.random() * 45) + 1;
      numbers.add(number);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    const hasDuplicates = new Set(numbers).size !== numbers.length;
    if (hasDuplicates) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }

    const isInRange = numbers.every((num) => num >= 1 && num <= 45);
    if (!isInRange) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
