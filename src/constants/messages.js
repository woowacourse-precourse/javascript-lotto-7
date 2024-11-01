const INPUT_MESSAGE = {
  ENTER_LOTTO_WINNING_NUMBERS: '당첨 번호를 입력해 주세요',
};

const ERROR_MESSAGE = {
  NUMBER_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  DUPLICATE_NUMBER:
    '[ERROR] 로또 번호는 중복되지 않은 숫자로 이루어져야 합니다.',
  NUMBER_RANGE: '[ERROR] 로또 번호는 1이상 45이하의 정수로 이루어져야 합니다.',
  CHECK_EMPTY_INPUT: '[ERROR] 보너스 번호는 반드시 입력해야 합니다.',
  BONUS_NUMBER_EXCEEDS_LIMIT: '[ERROR] 보너스 번호는 1개를 초과할 수 없습니다.',
};

export { INPUT_MESSAGE, ERROR_MESSAGE };
