export const PROMPT_MESSAGES = Object.freeze({
  INPUT_MONEY: '구입금액을 입력해 주세요.\n',
  INPUT_LOTTOS: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const ERROR_MESSAGES = Object.freeze({
  INVALID_NUMBER_LENGTH: '당첨 번호를 6개 입력해주세요.',
  INVALID_TYPE: '숫자를 입력해주세요.',
  INVALID_AMOUNT: '금액은 1000원 단위로 입력해주세요.',
  INVALID_DELIMITER: '구분자는 쉼표(,)를 사용해주세요.',
  INVALID_EMPTY: '유효한 값을 입력해주세요.',
  INVALID_DELIMITER_POSITION: '구분자는 숫자 사이에 존재할 수 있어요.',
  DUPLICATED_NUMBER: '중복된 숫자를 입력했어요.',
  INVALID_NUMBER_RANGE: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INVALID_NUMBER: '0은 입력하실 수 없습니다.',
});

export const INFO_MESSAGES = Object.freeze({
  PRINT_RESULT: '\n당첨 통계\n---',
});

export const NUMBER = Object.freeze({
  MIN: 1,
  MAX: 45,
  VALID_LENGTH: 6,
  MATCH_MINIMUM_COUNT: 3,

  PRICE_LIST: [5000, 50000, 1500000, 2000000000, 30000000],
});
