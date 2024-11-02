import NumberValidate from "../validate/NumberValidate.js";
import LottoValidate from "../validate/LottoValidate.js";

class Exception {
  static amountValidate(amount) {
    NumberValidate.validateNonNumber(amount);
    NumberValidate.validateSmallNumber(amount);
    NumberValidate.validateBigNumber(amount);
    NumberValidate.validateDivideThousand(amount);
  }

  static bonusNumberValidate(bonus_number, winning_lotto) {
    NumberValidate.validateNonNumber(bonus_number);
    NumberValidate.validateBonusDup(bonus_number, winning_lotto);
    NumberValidate.validateBonusRange(bonus_number);
  }

  static lottoValidate(lotto) {
    LottoValidate.validateIsNumber(lotto);
    LottoValidate.validateIsNull(lotto);
    LottoValidate.validateLottoLength(lotto);
    LottoValidate.validateLottoDup(lotto);
    LottoValidate.validateLottoRange(lotto);
  }
}

export default Exception;
