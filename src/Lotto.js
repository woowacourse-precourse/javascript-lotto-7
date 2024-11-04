class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    if (!numbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] : 당첨 번호는 1~45 사이여야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getMatchResult(winningNumbers, bonusNumber) {
    const matchedCount = this.#numbers.filter((num) =>
      winningNumbers.includes(num)
    ).length;
    const hasBouns = this.#numbers.includes(bonusNumber);
    return { matchedCount, hasBouns };
  }

  static validateWinningNumbers(winningNumbers) {
    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] : 당첨 번호는 6개여야 합니다.");
    }
    if (new Set(winningNumbers).size !== winningNumbers.length) {
      throw new Error("[ERROR] : 당첨 번호는 중복될 수 없습니다.");
    }
    if (!winningNumbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] : 당첨 번호는 1~45 사이여야 합니다.");
    }
  }

  static validateBonusNumber(bonusNumber, uniqueNumbers) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] : 보너스 번호는 1~45 사이여야 합니다.");
    }
    if (uniqueNumbers.has(bonusNumber)) {
      throw new Error(
        "[ERROR] : 보너스 번호는 당첨 번호와 중복될 수 없습니다."
      );
    }
  }
}

export default Lotto;
