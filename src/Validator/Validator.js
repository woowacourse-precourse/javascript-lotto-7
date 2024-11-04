class Validator {
  static UNIT = Object.freeze(1000);
  static PREFIX = Object.freeze("[ERROR]");
  static ERROR_MESSAGES = Object.freeze({
    PURCHASE_MONEY_NOT_NUMBER: `${Validator.PREFIX} 구입 금액은 숫자만 입력해주세요!`,
    PURCHASE_MONEY_NOT_FORMAT: `${Validator.PREFIX} 구입 금액은 1000원 단위로 입력해주세요!`,
    NUMBERS_NOT_DELIMETER: `${Validator.PREFIX} 구분자를 사용해주세요!`,
    NUMBERS_RANGE: `${Validator.PREFIX} 1~45 사이의 숫자를 입력해주세요!`,
    NUMBERS_UNITS: `${Validator.PREFIX} 6개의 숫자를 입력해주세요!`,
    NUMBERS_DUPLICATED: `${Validator.PREFIX} 중복된 숫자는 입력할 수 없습니다!`,
    BONUS_FORMAT: `${Validator.PREFIX} 보너스 번호는 숫자 하나만 입력할 수 있습니다!`,
  });
  static RANGE = Object.freeze({
    MIN: 1,
    MAX: 45,
    TARGET: 6,
  });

  static validateMoney(input) {
    if (isNaN(input)) {
      throw new Error(Validator.ERROR_MESSAGES.PURCHASE_MONEY_NOT_NUMBER);
    } else if (input % Validator.UNIT !== 0) {
      throw new Error(Validator.ERROR_MESSAGES.PURCHASE_MONEY_NOT_FORMAT);
    }
  }

  static validateWinningNumber(input) {
    Validator.validateWinningNumberNotUsingDelimeter(input);
    const winningNumbers = input.split(",").map((num) => num.trim());
    Validator.validateWinningNumberUnits(winningNumbers);
    Validator.validateNotNumber(winningNumbers);
    Validator.validateWinningNumberRange(winningNumbers);
    Validator.validateWinningNumberDuplicated(winningNumbers);
  }

  static validateBonusNumber(input) {
    Validator.validateBonusFormat(input);
    Validator.validateBonusRange(input);
  }

  static validateWinningNumberNotUsingDelimeter(input) {
    const delimeterRegex = /[,]/;
    if (!delimeterRegex.test(input)) {
      throw new Error(Validator.ERROR_MESSAGES.NUMBERS_NOT_DELIMETER);
    }
  }

  static validateWinningNumberRange(input) {
    const isValid = input.every(
      (num) => Validator.RANGE.MIN <= num && num <= Validator.RANGE.MAX
    );
    if (!isValid) throw new Error(Validator.ERROR_MESSAGES.NUMBERS_RANGE);
  }

  static validateWinningNumberUnits(input) {
    if (input.length !== 6)
      throw new Error(Validator.ERROR_MESSAGES.NUMBERS_UNITS);
  }

  static validateWinningNumberDuplicated(input) {
    const tempSet = new Set(input);
    if (input.length !== tempSet.size)
      throw new Error(Validator.ERROR_MESSAGES.NUMBERS_DUPLICATED);
  }

  static validateNotNumber(input) {
    const isValid = input.every((num) => !isNaN(num));
    if (!isValid) throw new Error(Validator.ERROR_MESSAGES.NUMBERS_RANGE);
  }

  static validateBonusFormat(input) {
    const bonusRegex = /^\d{1,2}$/;
    if (!bonusRegex.test(input))
      throw new Error(Validator.ERROR_MESSAGES.BONUS_FORMAT);
  }

  static validateBonusRange(input) {
    if (!(input <= Validator.RANGE.MAX && input >= Validator.RANGE.MIN)) {
      throw new Error(Validator.ERROR_MESSAGES.NUMBERS_RANGE);
    }
  }
}

export default Validator;
