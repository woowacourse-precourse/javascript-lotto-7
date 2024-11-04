import { ERROR_MESSAGES } from "../constant/errors.js";
import {
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  LOTTO_TICKET_PRICE_UNIT,
} from "../constant/number.js";
import Lotto from "../model/Lotto.js";
export const validator = {
  // 로또 구입 금액 유효성 검사
  validateLottoAmount(amount) {
    if (isNaN(amount)) {
      throw Error(ERROR_MESSAGES.invalid_lotto_amount_type);
    }

    if (amount < 0 || amount % LOTTO_TICKET_PRICE_UNIT !== 0) {
      throw Error(ERROR_MESSAGES.invalid_lotto_amount_divisible_1000);
    }
  },
  // 로또 당첨 번호 유효성 검사
  validateWinningLottoNumbers(numbers) {
    const lotto = new Lotto(numbers.split(",").map((e) => +e));
    return lotto.getLottoNumbers();
  },

  validateBonusNumberType(bonusNumber) {
    if (isNaN(bonusNumber) || parseInt(bonusNumber) !== bonusNumber) {
      throw Error(ERROR_MESSAGES.invalid_bonus_number_type);
    }
  },
  // 보너스 번호가 로또 번호가 겹치지 않는지 확인
  validateBonusNumberUniqueness(winningNumbers, bonusNumber) {
    if (winningNumbers.some((number) => bonusNumber === number)) {
      throw Error(ERROR_MESSAGES.invalid_bonus_number_uniqueness);
    }
  },

  validateBonusNumberRange(bonusNumber) {
    if (bonusNumber < LOTTO_NUMBER_MIN || bonusNumber > LOTTO_NUMBER_MAX) {
      throw Error(ERROR_MESSAGES.invalid_bonus_number_range);
    }
  },
  // 전체적인 보너스 번호 유효성 검사.
  validateBonusNumber(winningNumbers, bonusNumber) {
    validator.validateBonusNumberType(bonusNumber);
    validator.validateBonusNumberUniqueness(winningNumbers, bonusNumber);
    validator.validateBonusNumberRange(bonusNumber);
  },
};
