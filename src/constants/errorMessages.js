const ERR_MESSAGE_NUMBERS = {
  EMPTY_NUMBER_VALUE: "[ERROR] 값이 없습니다. 다시 입력해주세요.",
  IS_NOT_NUMBER: "[ERROR] 숫자가 아닙니다. 다시 입력해주세요",
  IS_INTEGERS: "[ERROR] 정수가 아닙니다. 다시 입력해주세요",
  IS_DECIMAL: "[ERROR] 소수가 아닙니다. 다시 입력해주세요.",
  IS_DECIMAL_LIMIT_POINT:
    "[ERROR] 소수점 자릿수가 너무 깁니다. 다시 입력해주세요.",
  IS_NOT_POSITIVE_NUMBER:
    "[ERROR] 양의 정수가 아닙니다. 양의 정수로 다시 입력해주세요.",
  IS_NOT_NEGATIVE_NUMBER:
    "[ERROR] 음의 정수만 입력할 수 있습니다. 다시 입력해주세요.",
  LIMIT_LENGTH_PRICE_NUMBER: `[ERROR] 숫자입력 6자리를 초과할 수 없습니다. 다시 입력해주세요.`,
  LIMIT_LENGTH_BONUS_NUMBER: `[ERROR] 숫자입력 2자리를 초과할 수 없습니다. 다시 입력해주세요.`,
  LIMIT_RANGE_PRICE_NUMBER: `[ERROR] 숫자는 최소 1,000원부터 최대 100,000원 사이의 값으로 입력할 수 있습니다. 다시 입력해주세요.`,
  LIMIT_RANGE_BONUS_NUMBER: `[ERROR] 보너스 번호는 최소 1부터 최대 45 사이의 값으로 입력할 수 있습니다. 다시 입력해주세요.`,
  TOO_EXCESSIVE_NUMBER:
    "[ERROR] 과도한 숫자를 입력하셨습니다. 다시 입력해주세요.",
  INPUT_KILO_UNIT:
    "[ERROR] 천원단위로만 입력이 가능합니다. ex) 1000, 3000, 20000, 50000",
};

export { ERR_MESSAGE_NUMBERS };
