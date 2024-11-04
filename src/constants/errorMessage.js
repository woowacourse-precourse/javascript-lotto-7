export const ERROR_MESSAGE_PREFIX = '[ERROR]';
export const ERROR_MESSAGES = Object.freeze({
  INVALID_COST_UNITS: '구입 금액은 1000원 단위이어야 합니다.',
  OUT_OF_BOUNDS_NUMBER_RANGE: '번호는 1~45사이의 숫자이어야 합니다.',
  CONFLICTING_BONUS_NUMBER: '보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  DUPLICATE_LOTTO_NUMBER: '로또 번호는 중복이 없어야 합니다.',
  EMPTY_INPUT_FIELD: '입력란에는 공란 없이 입력해야합니다.',
  INVALID_POSITIVE_INTEGER: '입력 값은 모두 양의 정수여야 합니다.',
  INVALID_LOTTO_NUMBERS_COUNT: '로또 번호는 6개이어야 합니다.',
  INVALID_LOTTO_NUMBER: '로또 번호는 양수여야 합니다.',
  INVALID_WINNING_NUMBERS_FORMAT:
    '당첨 번호는 숫자로 이루어졌있고, 쉼표를 기준으로 구분됩니다.',
  EXCEEDS_MAX_PURCHASE_AMOUNT:
    '한 회차에 구매 가능 금액은 최대 100만원까지입니다.',
});
