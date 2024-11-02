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
};

export const GAME_SETTINGS = { DIVISIBILITY_UNIT: 1000, EMPTY_STRING: '' };

export const REGEX = {
  NO_COMMA_NUMBER_REGEX: /^\d+$/,
  THOUSANDS_COMMA_REGEX: /^\d{1,3}(,\d{3})*$/,
  COMMA_REGEX: /,/g,
};
