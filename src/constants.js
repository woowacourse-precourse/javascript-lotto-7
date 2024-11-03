export const CONDITIONS = {
  PAYMENT_UNIT: 1000,
  PAYMENT_LIMIT: 100000,
  WINNING_NUMBERS_REGEX: /^[0-9]+(,[0-9]+)*$/,
  MAX_NUMBER: 45,
  MIN_NUMBER: 1,
  LOTTO_NUMBER_COUNT: 6,
};

export const PRINT_MESSAGE = {
  INPUT_PAYMENT: '구입금액을 입력해 주세요.\n',
  BUY_COUNT: '개를 구매했습니다.',
  INPUT_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
};

export const ERROR_MESSAGE = {
  INPUT_EMPTY: '값을 입력해주세요.',
  NOT_NUMBER: '숫자만 입력가능합니다.',
  NOT_POSITIVE_INTEGER: '양의 정수만 입력가능합니다.',
  INVALID_UNIT: `로또 구입 금액 단위는 ${CONDITIONS.PAYMENT_UNIT}원 단위만 가능합니다.`,
  OVER_MAXIMUM: `${CONDITIONS.PAYMENT_LIMIT}원까지 구매할 수 있습니다.`,
  NUMBERS_COUNT: `[ERROR] 로또 번호는 ${CONDITIONS.LOTTO_NUMBER_COUNT}개여야 합니다.`,
  SAME_NUMBER: '[ERROR] 로또 번호는 서로 다른 번호여야 합니다.',
  INVALID_WINNING_NUMBERS: '숫자와 쉼표(,)를 이용하여 당첨번호를 입력해주세요.',
  OUT_OF_RANGE: `${CONDITIONS.MIN_NUMBER}~${CONDITIONS.MAX_NUMBER} 사이의 숫자를 입력해주세요.`,
};
