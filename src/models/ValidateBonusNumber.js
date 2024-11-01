class ValidateBonusNumber {
  validateIsNumber(input) {
    if (Number.isNaN(Number(input))) {
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }
  }

  validateBonusNumberRange(number) {
    if (number < 1 || number > 45) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  validateDuplicateWithWinningNumbers(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }

  validateBonusNumber(input, winningNumbers) {
    this.validateIsNumber(input);
    const bonusNumber = Number(input);
    this.validateBonusNumberRange(bonusNumber);
    this.validateDuplicateWithWinningNumbers(bonusNumber, winningNumbers);
    return bonusNumber;
  }
}

export default ValidateBonusNumber;
