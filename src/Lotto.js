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
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  sort() {
    this.#numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }

  compare(answerNum, bonusNum) {
    let count = 0;
    answerNum.map((value) => {
      if (this.#numbers.includes(value)) count++;
    });
    answerNum.map((value) => {
      if (this.#numbers.includes(bonusNum) && count == 5) count = 7;
    });

    return count;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
