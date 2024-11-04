class BonusNumber {
  #bonus;

  constructor(number, winningNumbers) {
    this.#validate(number, winningNumbers);
    this.#bonus = number;
  }

  #validate(number, winningNumbers) {
    if (!Number.isInteger(number) || number < 1 || number > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 정수여야 합니다.");
    }
    if (winningNumbers.includes(number)) {
      throw new Error(
        "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다."
      );
    }
  }

  getBonusNumber() {
    return this.#bonus;
  }
}

export default BonusNumber;
