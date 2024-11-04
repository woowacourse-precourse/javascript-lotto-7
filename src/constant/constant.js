export const INPUT_MESSAGES = Object.freeze({
  MONEY: '구입금액을 입력해 주세요.\n',
});

export const OUTPUT_MESSAGES = Object.freeze({
  LOTTO_AMOUNT: (amount) => `${amount}개를 구매했습니다.`,
});

export const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGES = Object.freeze({
  EMPTY_INPUT: '입력이 비었습니다. 값을 입력해주세요.',
  NOT_A_NUMBER: '입력이 숫자가 아닙니다. 숫자를 입력해주세요.',
  UNDER_LOTTO_PRICE: '최소 구입 금액은 1,000원 입니다.',
  NOT_DIVISIBLE: '구입 금액은 1,000원 단위로 입력해야 합니다.',
  INVALID_LENGTH: '번호는 6개여야 합니다.',
  DUPLICATE_NUMBER: '번호는 중복되지 않아야 합니다.',
  OUT_OF_RANGE: '번호는 1 ~ 45까지의 숫자입니다.',
});

export const LOTTO = Object.freeze({
  PRICE: 1000,
  LENGTH: 6,
  MIN_NUM: 1,
  MAX_NUM: 45,
});
