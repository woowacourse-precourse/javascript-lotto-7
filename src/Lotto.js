class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  compareWinning(winningNumbers) {
    let correct = 0;
    this.#numbers.forEach((i) => {
      if (winningNumbers.includes(i)) return correct++;
    });

    return correct;
  }

  compareBonusWinning(winningBonusNumber) {
    return winningBonusNumber === this.#bonusNumber;
  }
}

export default Lotto;
