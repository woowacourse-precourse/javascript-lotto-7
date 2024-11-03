const ERROR_MESSAGES = {
  INPUT: {
    EMPTY_INPUT: '[ERROR] 값이 입력되지 않았습니다.',
    NOT_A_NUMBER: '[ERROR] 구입금액은 숫자로 입력되어야 합니다.',
    NEGATIVE_OR_ZERO_AMOUNT: '[ERROR] 구입금액은 양수여야 합니다.',
    INVALID_AMOUNT: '[ERROR] 구입금액은 1000원 단위로 입력되어야 합니다.',
  },

  LOTTO: {
    INVALID_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
    INVALID_RANGE: '[ERROR] 로또 번호는 1 이상 45 이하의 정수여야 합니다',
    DUPLICATE_NUMBERS:
      '[ERROR] 로또 번호는 중복되지 않은 숫자로 구성되어야 합니다.',
  },

  LOTTOS: {
    EMPTY_ARRAY: '[ERROR] 로또 목록이 비어 있습니다.',
    INVALID_INSTANCE: '[ERROR] 모든 로또가 Lotto 클래스의 인스턴스여야 합니다.',
  },
};

export default ERROR_MESSAGES;
