import ValidateNumber from './ValidateNumber';
import { NUMBER_ERROR_MESSAGES } from '../contents/InputErrorMessages';

class BonusNumber {
  #bonusNum;
  constructor(bonusNum, winningNum) {
    this.#validate(bonusNum, winningNum);
    this.#bonusNum = bonusNum;
  }

  #validate(bonusNum, winningNum) {
    ValidateNumber.checkMissing(
      bonusNum,
      NUMBER_ERROR_MESSAGES.BonusNumberGuid,
    );
    ValidateNumber.validateNumber(
      bonusNum,
      NUMBER_ERROR_MESSAGES.BonusNumberGuid,
    );
    if (winningNum.includes(bonusNum)) {
      throw new Error(NUMBER_ERROR_MESSAGES.duplicateWithWinningNumbers);
    }
  }
}

export default BonusNumber;
