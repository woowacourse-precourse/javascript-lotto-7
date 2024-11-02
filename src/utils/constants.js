export const LOTTO = {
  NUMBER_RANGE: { MIN: 1, MAX: 45 },
  WINNING_NUMBERS_COUNT: 6,
  SEPARATOR: ',',
};

export const MESSAGES = {
  INPUT_AMOUT: '구입금액을 입력해 주세요.',
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

export const ERROR_MESSAGES = {
  INVALID_PURCHASE_AMOUNT: '[ERROR] 구입 금액을 숫자로 넣어주세요.',
  PURCHASE_AMOUNT_POSITIVE: '[ERROR] 구입 금액은 0보다 커야 합니다.',
  PURCHASE_AMOUNT_DIVISIBILITY: (unit) =>
    `[ERROR] 구입 금액은 ${unit} 단위로 나누어 떨어져야합니다.`,
  INVALID_WINNING_NUMBERS:
    '[ERROR] 입력할 로또 번호는 6개이며 ,(쉼표)로 구분합니다.',
  NON_NUMERIC_VALUE: '[ERROR] 입력값은 숫자여야 합니다.',
  LOTTO_RANGE: '[ERROR] 로또 번호는 1부터 45까지의 숫자입니다.',
  NON_NUMERIC_BONUS: '[ERROR] 입력은 숫자와 구분자 ,만 허용됩니다.',
  DUPLICATE_BONUS_NUMBER:
    '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
};

export const GAME_SETTINGS = { DIVISIBILITY_UNIT: 1000, EMPTY_STRING: '' };

export const REGEX = {
  NO_COMMA_NUMBER_REGEX: /^\d+$/,
  THOUSANDS_COMMA_REGEX: /^\d{1,3}(,\d{3})*$/,
  COMMA_REGEX: /,/g,
};
