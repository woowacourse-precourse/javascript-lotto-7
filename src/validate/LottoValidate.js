import { ERROR_MESSAGE } from "../constant/Error.js";
import { LOTTO_DATA } from "../constant/Data.js";

class LottoValidate {
  static validateIsNumber(lotto) {
    const NUM_REGEX = /^[0-9\s]*$/;
    if (lotto.some((number) => !NUM_REGEX.test(number))) throw new Error(ERROR_MESSAGE.LOTTO.ERROR_LOTTO_NON_NUMBER);
  }

  static validateIsNull(lotto) {
    if (lotto.some((element) => element === "")) throw new Error(ERROR_MESSAGE.LOTTO.ERROR_LOTTO_NULL);
  }

  static validateLottoLength(lotto) {
    if (lotto.length !== LOTTO_DATA.lottoLength) throw new Error(ERROR_MESSAGE.LOTTO.ERROR_LOTTO_LENGTH);
  }

  static validateLottoDup(lotto) {
    const lottoSet = new Set(lotto);
    if (lotto.length !== lottoSet.size) throw new Error(ERROR_MESSAGE.LOTTO.ERROR_LOTTO_DUP);
  }

  static validateLottoRange(lotto) {
    if (lotto.some((number) => number < LOTTO_DATA.minNum || number > LOTTO_DATA.maxNum))
      throw new Error(ERROR_MESSAGE.LOTTO.ERROR_LOTTO_RANGE);
  }
}

export default LottoValidate;
