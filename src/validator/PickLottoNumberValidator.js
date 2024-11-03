class PickLottoNumberValidator {
  static validatePickLottoNumber(pickLottoNumber) {
    const pickLottoNumberArray = pickLottoNumber.split(',').map(Number);
    this.isAnotherCharacter(pickLottoNumberArray);
    this.isRightCount(pickLottoNumberArray);
    this.isOutOfRange(pickLottoNumberArray);
    this.isDuplicatedNumber(pickLottoNumberArray);
  }

  static isAnotherCharacter(pickLottoNumberArray) {
    if (pickLottoNumberArray.some((number) => !Number.isInteger(number))) {
      throw new Error('[ERROR] 당첨 번호는 쉼표(,)로 구분해야 합니다.');
    }
  }

  static isRightCount(pickLottoNumberArray) {
    if (pickLottoNumberArray.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개를 입력해야 합니다.');
    }
  }

  static isOutOfRange(pickLottoNumberArray) {
    if (pickLottoNumberArray.some((number) => number < 1 || number > 45)) {
      throw new Error('[ERROR] 당첨 번호는 로또 번호의 숫자 범위(1~45) 안에서 입력해야 합니다.');
    }
  }

  static isDuplicatedNumber(pickLottoNumberArray) {
    if (pickLottoNumberArray.length !== new Set(pickLottoNumberArray).size) {
      throw new Error('[ERROR] 1개의 로또를 발행할 때에는 중복되지 않는 6개의 숫자를 뽑아야 합니다.');
    }
  }
}

export default PickLottoNumberValidator;
