class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  getMatchResult(winningNumbers, bonusNumber) {
    const matchedCount = winningNumbers
      .filter((winningNumber) => this.#numbers.includes(winningNumber)).length;
    const isBonusMatched = this.#numbers.includes(bonusNumber);
    return [matchedCount, isBonusMatched];
  }
}

export default Lotto;
