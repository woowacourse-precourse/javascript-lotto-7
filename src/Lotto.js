class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  matchingWinning(winningNumbers) {
    let correct = 0;
    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) return correct++;
    });

    return correct;
  }

  matchingBonus(bonusNumber) {
    this.#numbers.forEach((number) => {
      if (number === bonusNumber) return true;
    });
    return false;
  }
}

export default Lotto;
