class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  // 왜 private으로 ?
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  sortAscending() {
    this.#numbers.sort((firstNumber, secondNumber) => firstNumber - secondNumber);
  }

  contains(winningNumber) {
    return true;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
