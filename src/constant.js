export const INPUT_MESSAGE = Object.freeze({
  INPUT_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
  INPUT_WINNING_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

export const LOTTO_PRICE = 1000;

export const DELERIMETER = ',';

export const LOTTO_MATCH_TABLE = Object.freeze({
  6: 1,
  5: 3,
  4: 4,
  3: 5,
  2: 0,
  1: 0,
  0: 0,
});

export const LOTTO_WINNIG_PRICE = Object.freeze({
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
  0: 0,
});

export const LOTTO_RESULT_MESSAGE = Object.freeze({
  1: '6개 일치 (2,000,000,000원)',
  2: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  3: '5개 일치 (1,500,000원)',
  4: '4개 일치 (50,000원)',
  5: '3개 일치 (5,000원)',
});

const ERROR_TAG = '[ERROR] ';
export const ERROR_MESSAGE = Object.freeze({
  AMOUNT_NOT_NUMBER: ERROR_TAG.concat('금액은 숫자여야 합니다.'),
  AMOUNT_NEGATIVE: ERROR_TAG.concat('금액은 0보다 커야 합니다.'),
});
