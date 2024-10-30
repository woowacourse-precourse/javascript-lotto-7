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

  compareWinningLotto(winningNumbers, bonusNumber) {
    const matchedNumbersLength = winningNumbers
      .filter((winningNumber) => this.#numbers.includes(winningNumber)).length;
    const isMatchedBonusNumber = this.#numbers.includes(bonusNumber);
    return [matchedNumbersLength, isMatchedBonusNumber];
  }
}

export default Lotto;
