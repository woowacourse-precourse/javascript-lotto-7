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
  }

  get numbers() {
    return this.#numbers;
  }

  getRank(winningNumbers, bonusNumber) {
    const matchedCount = this.#numbers.filter((num) =>
      winningNumbers.includes(num)
    ).length;
    const bonusMatch = this.#numbers.includes(bonusNumber);

    if (matchedCount === 6) return 1;
    if (matchedCount === 5 && bonusMatch) return 2;
    if (matchedCount === 5) return 3;
    if (matchedCount === 4) return 4;
    if (matchedCount === 3) return 5;
    return 0;
  }
}

export default Lotto;
