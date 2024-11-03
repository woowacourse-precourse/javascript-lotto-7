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

    const numbersSet = new Set(numbers);
    if (numbersSet.size !== 6) {
      throw new Error("[ERROR] 중복된 로또 번호가 존재합니다.");
    }
  }

  getNumbers() {
      return `[${this.#numbers.join(", ")}]`;
  }

  sortASC() {
      this.#numbers.sort((a, b) => a - b);
  }

  matchWinningNumbers(winningNumbers) {
    return this.#numbers.filter((numbers) =>
      winningNumbers.includes(numbers)
    ).length;
  }

  matchBonusNumber(bonusNumber) {
      return this.#numbers.includes(Number(bonusNumber));
  }

  convertRank(winningNumbers, bonusNumber) {
    const winningNumberCount = this.matchWinningNumbers(winningNumbers);
    const rankMapping = {
        6: 1,
        5: 3,
        4: 4,
        3: 5,
    };

    if (winningNumberCount === 5 && this.matchBonusNumber(bonusNumber))
        return 2;

    return rankMapping[winningNumberCount] || 0;
  }
}

export default Lotto;
