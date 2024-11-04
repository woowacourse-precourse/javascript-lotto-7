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
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_AMOUNT_TYPE);
    }

    if (amount < 0 || amount % LOTTO_TICKET_PRICE_UNIT !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_AMOUNT_DIVIDE_BY_1000);
    }
  },
  // 로또 당첨 번호 유효성 검사
  validateWinningLottoNumbers(numbers) {
    try {
      const lotto = new Lotto(numbers.split(",").map((e) => +e));
      return lotto.getLottoNumbers();
    } catch (error) {
      throw error;
    }
  },

  validateBonusNumberType(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_TYPE);
    }
  },
  // 보너스 번호가 로또 번호가 겹치지 않는지 확인
  validateBonusNumberUniqueness(winningNumbers, bonusNumber) {
    if (winningNumbers.some((number) => bonusNumber === number)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_UNIQUENESS);
    }
  },

  validateBonusNumberRange(bonusNumber) {
    if (bonusNumber < LOTTO_NUMBER_MIN || bonusNumber > LOTTO_NUMBER_MAX) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_RANGE);
    }
  },
  // 전체적인 보너스 번호 유효성 검사.
  validateBonusNumber(winningNumbers, bonusNumber) {
    try {
      validator.validateBonusNumberType(bonusNumber);
      validator.validateBonusNumberUniqueness(winningNumbers, bonusNumber);
      validator.validateBonusNumberRange(bonusNumber);
    } catch (error) {
      throw error;
    }
  },
};
