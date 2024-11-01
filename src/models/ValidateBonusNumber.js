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
}

export default ValidateBonusNumber;
