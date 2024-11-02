import ValidateNumber from './ValidateNumber';
import { NUMBER_ERROR_MESSAGES } from '../contents/InputErrorMessages';

class BonusNumber {
  #number;
  constructor(number) {
    this.#validate(number);
    this.#number = number;
  }

  #validate(number) {
    ValidateNumber.checkMissing(
      number,
      `[ERROR] : ${NUMBER_ERROR_MESSAGES.BonusNumberGuid}`,
    );
    ValidateNumber.validateNumber(
      number,
      NUMBER_ERROR_MESSAGES.numberOutOfRange,
    );
  }

  getNumber() {
    return this.#number; // 내부 메서드를 통해 접근 가능
  }
}

export default BonusNumber;
