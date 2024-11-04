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
    for (let i = numbers.length - 1; i > 0; i--) {
      if (numbers[i] <= numbers[i - 1]) {
        throw new Error("[ERROR]");
      }
    }
  }

  // TODO: 추가 기능 구현
  getFormattedLottoNumbers() {
    let formattedResult = "";
    for (let i = 0; i < this.#numbers.length; i++) {
      formattedResult += this.#numbers[i] + ", ";
    }
    return "[" + formattedResult.slice(0, -2) + "]";
  }
  countMatchingLotto(winningNumbers, bonusNumber) {
    let matchedCount = winningNumbers.filter((num) =>
      this.#numbers.includes(num)
    ).length;
    return [matchedCount, this.#numbers.includes(bonusNumber)];
  }
}

export default Lotto;
