const ERROR_MESSAGES = Object.freeze({
  NOT_A_NUMBER: '[ERROR] 입력할 값은 숫자여야 합니다.',
  WRONG_UNIT: '[ERROR] 1000원 단위로 나누어 떨어지지 않습니다.',
  WRONG_RANGE: {
    PURCHASE_AMOUNT:
      '[ERROR] 구입 금액은 1,000원 이상 100,000원 이하여야 합니다.',
    LOTTO_NUMBER: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  },
  DUPLICATE_NUMBER: '[ERROR] 중복된 숫자가 있습니다.',
  WRONG_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  EMPTY_STRING: '[ERROR] 입력할 값은 빈 문자열이 될 수 없습니다.',
  WRONG_FORMAT: '[ERROR] 쉼표로 올바르게 구분되지 않았습니다.',
  DECIMAL: '[ERROR] 소수점이 있는 값은 입력할 수 없습니다.',
});

export default ERROR_MESSAGES;
