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

    // TODO: 추가 기능 구현
    if (!this.#isValidRange(numbers)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (this.#hasDuplicates(numbers)) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }


  #isValidRange(numbers) {
    return numbers.every((number) => number >= 1 && number <= 45);
  }

  // 중복 확인
  #hasDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    return uniqueNumbers.size !== numbers.length;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;