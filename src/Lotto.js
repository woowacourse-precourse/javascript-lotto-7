class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("로또 번호는 6개여야 합니다.");
    }
    if (!numbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error("로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("로또 번호는 중복될 수 없습니다.");
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }

  includingNumber(bonusNumber) {
    return [...this.#numbers].includes(bonusNumber);
  }

  matches(otherNumbers) {
    return this.#numbers.filter((num) => otherNumbers.includes(num)).length;
  }
}

export default Lotto;
