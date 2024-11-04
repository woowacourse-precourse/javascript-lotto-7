class ValidateBonusNumber {
  constructor(bonusNum, winningNumbers) {
    this.bonusNum = bonusNum;
    this.winningNumbers = winningNumbers;
  }

  validate() {
    const num = this.bonusNumIsNumber();
    this.bonusNumIsInRange(num);
    this.bonusNumIsInteger(num);
    this.bonusNumIsDuplicatedWithWinNumbers(num);
    return num;
  }

  bonusNumIsNumber() {
    const num = Number(this.bonusNum);
    if (isNaN(num)) {
      this.throwError("보너스 번호는 숫자이어야 합니다.");
    }
    return num;
  }

  bonusNumIsInRange(num) {
    if (num < 1 || num > 45) {
      this.throwError("보너스 번호는 1~45 사이의 숫자여야 합니다.");
    }
  }

  bonusNumIsInteger(num) {
    if (!Number.isInteger(num)) {
      this.throwError("보너스 번호는 1~45 사이의 정수여야 합니다.");
    }
  }

  bonusNumIsDuplicatedWithWinNumbers(num) {
    if (this.winningNumbers.includes(num)) {
      this.throwError("보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }

  throwError(message) {
    throw new Error(`[ERROR] ${message}`);
  }
}

export default ValidateBonusNumber;
