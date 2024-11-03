import LottoModel from '../model/LottoModel.js';

class PickBonusNumberValidator {
  static validateBonusNumber(pickBonusNumber, pickLottoNumber) {
    this.isSpace(pickBonusNumber);
    this.isCharacter(pickBonusNumber);
    this.isOutOfRange(pickBonusNumber);
    this.isDuplicatedNumber(pickBonusNumber, pickLottoNumber);
  }

  static isCharacter(pickBonusNumber) {
    if (isNaN(pickBonusNumber) || !Number.isInteger(Number(pickBonusNumber))) {
      throw new Error('[ERROR] 보너스 번호에는 정수를 입력해야 합니다.');
    }
  }

  static isOutOfRange(pickBonusNumber) {
    if (pickBonusNumber < 1 || pickBonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 로또 번호의 숫자 범위(1~45) 안에서 입력해야 합니다.');
    }
  }

  static isDuplicatedNumber(pickBonusNumber, pickLottoNumber) {
    if (pickLottoNumber.includes(pickBonusNumber)) {
      throw new Error('[ERROR] 이미 존재하는 번호를 보너스 번호로 입력할 수 없습니다.');
    }
  }

  static isSpace(pickBonusNumber) {
    if (pickBonusNumber === '') {
      throw new Error('[ERROR] 보너스 번호에는 정수를 입력해야 합니다.');
    }
  }
}

export default PickBonusNumberValidator;
