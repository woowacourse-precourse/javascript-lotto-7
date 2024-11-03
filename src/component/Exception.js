import ValidateNumber from "../validate/ValidateNumber.js";
import ValidateLotto from "../validate/ValidateLotto.js";

class Exception {
  static amountException(amount) {
    ValidateNumber.validateNonNumber(amount);
    ValidateNumber.validateSmallNumber(amount);
    ValidateNumber.validateBigNumber(amount);
    ValidateNumber.validateDivideThousand(amount);
  }

  static bonusNumberException(bonus_number, winning_lotto) {
    ValidateNumber.validateNonNumber(bonus_number);
    ValidateNumber.validateBonusDup(bonus_number, winning_lotto);
    ValidateNumber.validateBonusRange(bonus_number);
  }

  static lottoException(lotto) {
    ValidateLotto.validateIsNumber(lotto);
    ValidateLotto.validateIsNull(lotto);
    ValidateLotto.validateLottoLength(lotto);
    ValidateLotto.validateLottoDup(lotto);
    ValidateLotto.validateLottoRange(lotto);
  }
}

export default Exception;
