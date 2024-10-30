const ERROR_MESSAGES = Object.freeze({
  NOT_A_NUMBER: '[ERROR] 입력할 값은 숫자여야 합니다.',
  WRONG_UNIT: '[ERROR] 1000원 단위로 나누어 떨어지지 않습니다.',
  WRONG_RANGE: {
    PURCHASE_AMOUNT:
      '[ERROR] 구입 금액은 1,000원 이상 100,000원 이하여야 합니다.',
  },
});

export default ERROR_MESSAGES;
