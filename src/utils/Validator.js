import { ERROR_MESSAGES, LOTTO } from "../constants/Constants.js";

const Validator = {
  // 구입 금액의 유효성 검사 메서드
  validatePurchaseMoney(money) {
    this.validateMoneyExistence(money);
    this.validateMoneyIsNumber(money);
    this.validateMoneyMinimum(money);
    this.validateMoneyUnit(money);
  },

  //구입금액 존재 여부 검사
  validateMoneyExistence(money) {
    if (!money) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  },

  // 구입 금액이 숫자인지 검사
  validateMoneyIsNumber(money) {
    if (isNaN(money)) {
      throw new Error(ERROR_MESSAGES.INVALID_MONEY_NUMBER);
    }
  },

  // 구입 금액이 최소 금액 이상인지 검사
  validateMoneyMinimum(money) {
    if (money < LOTTO.PRICE_PER_TICKET) {
      throw new Error(ERROR_MESSAGES.INVALID_MONEY_MINIMUM);
    }
  },

  // 구입 금액이 1000원 단위인지 검사
  validateMoneyUnit(money) {
    if (money % LOTTO.PRICE_PER_TICKET !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_MONEY_UNIT);
    }
  },

  // 로또 번호의 유효성 검사 메서드
  validateLottoNumbers(numbers) {
    this.validateCount(numbers);
    this.validateDuplicates(numbers);
    this.validateRange(numbers);
    this.validateSeparator(numbers);
  },

  // 로또 번호 개수 검사
  validateCount(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
    if (numbers.length !== LOTTO.NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_NUMBERS_COUNT);
    }
  },

  // 로또 번호 중복 검사
  validateDuplicates(numbers) {
    if (new Set(numbers).size !== LOTTO.NUMBERS_COUNT) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_DUPLICATE);
    }
  },

  // 로또 번호 범위 검사
  validateRange(numbers) {
    if (
      !numbers.every(
        (num) => num >= LOTTO.MIN_NUMBER && num <= LOTTO.MAX_NUMBER
      )
    ) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_OUT_OF_RANGE);
    }
  },

  // 로또 번호 구분자 검사
  validateSeparator(numbersString) {
    if (!/^\d+(,\d+)*$/.test(numbersString)) {
      throw new Error(ERROR_MESSAGES.INVALID_WINNING_SEPARATOR);
    }
  },

  // 보너스 번호의 유효성 검사 메서드
  validateBonusNumber(bonusNumber, winningNumbers) {
    this.validateBonusRange(bonusNumber);
    this.validateBonusDuplicate(bonusNumber, winningNumbers);
  },

  // 보너스 번호 범위 검사
  validateBonusRange(bonusNumber) {
    if (bonusNumber < LOTTO.MIN_NUMBER || bonusNumber > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_OUT_OF_RANGE);
    }
  },
  // 보너스 번호 중복 검사
  validateBonusDuplicate(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    }
  },
};

export default Validator;
