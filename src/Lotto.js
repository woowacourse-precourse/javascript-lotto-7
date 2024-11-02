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

    const setNumbers = new Set(numbers);
    if (setNumbers.size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다');
    }

    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 로또 번호는 1이상 45이하 숫자여야 합니다.');
      }
    });
  }

  getFormattedNumbers() {
    return `[${String(this.#numbers).replaceAll(',', ', ')}]`;
  }

  getMatchResult(winningNumbers, bonusNumber) {
    const matchedCount = winningNumbers
      .filter((winningNumber) => this.#numbers.includes(winningNumber)).length;
    const isBonusMatched = this.#numbers.includes(bonusNumber);
    return [matchedCount, isBonusMatched];
  }
}

export default Lotto;
