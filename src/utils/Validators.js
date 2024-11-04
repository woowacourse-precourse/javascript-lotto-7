import { ERROR_MESSAGES } from "../constants/ErrorMessages.js";

const validators = {
  checkMoneyInput(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error(ERROR_MESSAGES.INVALID_MONEY_INPUT);
    }
  },

  checkMinMoneyInput(value) {
    if (value <= 1000) {
      throw new Error(ERROR_MESSAGES.MIN_MONEY_INPUT);
    }
  },

  checkLottoLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.NUMBER_OF_INPUT);
    }
  },

  checkDivisible(value) {
    // 1000으로 나누어지지 않으면 Error
    if (value % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.INDIVISIBLE_MONEY_INPUT);
    }
  },

  checkLimitMoney(value) {
    // 100_000_000을 넘으면 Error
    if (value > 100_000_000) {
      throw new Error(ERROR_MESSAGES.LIMIT_MONEY_INPUT);
    }
  },

  checkNumberOfLotto(value) {
    if (value.length !== 6) {
      throw new Error(ERROR_MESSAGES.NUMBER_OF_INPUT);
    }
  },

  checkNumber(value) {
    // 숫자가 아니면 Error
    if (typeof value !== "number") {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER_INPUT);
    }
  },

  checkRangeOfNumber(value) {
    // 1~45 사이의 값이 아니면 Error
    if (value < 1 || value > 45) {
      throw new Error(ERROR_MESSAGES.OUT_OF_RANGE_NUMBER_INPUT);
    }
  },

  checkDuplicateNumber(values) {
    // 중복된 번호가 있는지 확인
    const uniqueNumbers = new Set(values);
    if (uniqueNumbers.size !== values.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER_INPUT);
    }
  },

  checkBonusNumber(bonusNumber, lottoNumbers) {
    // 보너스 번호와 로또 번호가 중복되면 Error
    if (lottoNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_INPUT);
    }
  },
};

export default validators;
