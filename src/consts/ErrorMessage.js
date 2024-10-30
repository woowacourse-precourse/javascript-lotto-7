const ERROR_MESSAGES = {
  WINNING_NUMBERS_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  WINNING_NUMBERS_DUPLICATE: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
  WINNING_NUMBERS_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  MONEY_INVALID: '[ERROR] 구입 금액은 1000원 단위의 양의 정수여야 합니다.',
  BONUS_NUMBER_RANGE: '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
  BONUS_NUMBER_DUPLICATE:
    '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
};

export default ERROR_MESSAGES;
