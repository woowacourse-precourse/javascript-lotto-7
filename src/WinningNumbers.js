class WinningNumbers {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  match(lotto) {
    const lottoNumbers = lotto.getNumbers();
    const matchCount = lottoNumbers.filter((num) =>
      this.#numbers.includes(num)
    ).length;
    const matchBonus = lottoNumbers.includes(this.#bonusNumber);

    return {
      matchCount,
      matchBonus,
    };
  }

  getNumbers() {
    return [...this.#numbers];
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}
