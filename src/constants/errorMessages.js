const ERROR_MESSAGES = {
  INVALID_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  DUPLICATE_NUMBER: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
  INVALID_NUMBER_RANGE: '[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.',

  NON_NUMERIC_INPUT: '[ERROR] 숫자 이외의 문자는 입력할 수 없습니다.',
  MINIMUM_AMOUNT: '[ERROR] 최소 구입금액은 1,000원입니다.',
  MAXIMUM_AMOUNT:
    '[ERROR] 구입금액은 9,007,199,254,740,000원을 넘어설 수 없습니다.',
  INVALID_AMOUNT_UNIT: '[ERROR] 구입금액은 1,000원 단위로 입력해야 합니다.',

  INVALID_WINNING_NUMBER_FORMAT:
    '[ERROR] 당첨 번호는 쉼표로 구분하여 입력해주세요.',
  INVALID_COMMA_POSITION: '[ERROR] 쉼표가 올바르지 않은 위치에 있습니다.',
  INVALID_WINNING_NUMBERS_LENGTH:
    '[ERROR] 당첨 번호는 6개의 숫자이어야 합니다.',
  DUPLICATE_WINNING_NUMBER: '[ERROR] 당첨 번호는 중복되지 않아야 합니다.',
  INVALID_WINNING_NUMBER_RANGE:
    '[ERROR] 당첨 번호는 1 ~ 45 사이의 숫자여야 합니다.',

  INVALID_BONUS_NUMBER: '[ERROR] 보너스 번호는 숫자여야 합니다.',
  INVALID_BONUS_NUMBER_RANGE:
    '[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자여야 합니다.',
  DUPLICATE_BONUS_NUMBER:
    '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
};

export default ERROR_MESSAGES;
