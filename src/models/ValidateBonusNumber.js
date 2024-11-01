class ValidateBonusNumber {
  #validateIsNumber(input) {
    if (Number.isNaN(Number(input))) {
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }
  }
}

export default ValidateBonusNumber;
