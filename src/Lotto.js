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

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개의 서로 다른 숫자여야 합니다.');
    }
  }

  get numbers() {
    return [...this.#numbers];
  }

  checkWinningStatus(winningNumbers, bonusNumber) {
    let matchCount = 0;
    let hasBonus = false;
    this.numbers.forEach((number) => {
      if (winningNumbers.includes(number)) matchCount++;
      if (bonusNumber === number) hasBonus = true;
    });

    return { matchCount, hasBonus };
  }
}

export default Lotto;
