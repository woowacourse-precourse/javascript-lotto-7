const INPUT_MESSAGE = {
  LOTTO_WINNING_NUMBERS: '당첨 번호를 입력해 주세요',
};

const ERROR_MESSAGE = {
  INVALID_WINNING_NUMBERS_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_WINNING_NUMBERS_DUPLICATE:
    '[ERROR] 로또 번호는 중복되지 않은 숫자로 이루어져야 합니다.',
  INVALID_WINNING_NUMBERS_RANGE:
    '[ERROR] 로또 번호는 1이상 45이하의 정수로 이루어져야 합니다.',
  INVALID_EMPTY_BONUS_NUMBER: '[ERROR] 보너스 번호는 반드시 입력해야 합니다.',
  INVALID_BONUS_NUMBER_COUNT: '[ERROR] 보너스 번호는 1개를 초과할 수 없습니다.',
  INVALID_BONUS_NUMBER_RANGE:
    '[ERROR] 보너스 번호는 1이상 45이하 정수이어야 합니다.',
  INVALID_BONUS_NUMBER_DUPLICATE:
    '[ERROR] 보너스 번호는 기존 당첨 번호와 중복될 수 없습니다.',
};

export { INPUT_MESSAGE, ERROR_MESSAGE };
