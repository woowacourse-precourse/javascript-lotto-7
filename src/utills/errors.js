const ERROR_MESSAGES = {
  PURCHASE_AMOUNT: {
    INVALID_AMOUNT: '[ERROR] 구매 금액은 1000원 단위로 입력되어야 합니다.',
  },

  LOTTO: {
    INVALID_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
    INVALID_RANGE: '[ERROR] 로또 번호는 1 이상 45 이하의 정수여야 합니다',
    DUPLICATE_NUMBERS:
      '[ERROR] 로또 번호는 중복되지 않은 숫자로 구성되어야 합니다.',
  },
};

export default ERROR_MESSAGES;
