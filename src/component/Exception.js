import NumberValidate from "../validate/NumberValidate.js";
import LottoValidate from "../validate/LottoValidate.js";

class Exception {
  static amountValidate(money) {
    NumberValidate.validateNonNumber(money);
    NumberValidate.validateSmallNumber(money);
    NumberValidate.validateDivideThousand(money);
  }

  static bonusNumberValidate(bonus, winning_lotto) {
    NumberValidate.validateNonNumber(bonus);
    NumberValidate.validateBonusDup(bonus, winning_lotto);
    NumberValidate.validateBonusRange(bonus);
  }

  static lottoValidate(numbers) {
    LottoValidate.validateIsNumber(numbers);
    LottoValidate.validateLottoLength(numbers);
    LottoValidate.validateLottoDup(numbers);
    LottoValidate.validateLottoRange(numbers);
  }
}

export default Exception;
