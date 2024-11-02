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
  }

  sort() {
    this.#numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }

  compare(answerNum) {
    let count = 0;
    answerNum.map((value) => {
      if (this.#numbers.includes(value))
        count++;
    })
    return count;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
