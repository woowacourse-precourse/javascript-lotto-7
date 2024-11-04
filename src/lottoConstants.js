export const LOTTO_PRICE = 1000;

export const LOTTO_NUMBER_MIN = 1;
export const LOTTO_NUMBER_MAX = 45;
export const LOTTO_NUMBER_COUNT = 6;
export const LOTTO_WINNING_NUMBER_COUNT = 6;
export const LOTTO_BONUS_NUMBER_COUNT = 1;

export const PRIZE_AMOUNT = Object.freeze({
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
});

export const PRIZE_CONDITION = Object.freeze({
  FIRST: { MATCH_COUNT: 6, BONUS_MATCH: false },
  SECOND: { MATCH_COUNT: 5, BONUS_MATCH: true },
  THIRD: { MATCH_COUNT: 5, BONUS_MATCH: false },
  FOURTH: { MATCH_COUNT: 4, BONUS_MATCH: false },
  FIFTH: { MATCH_COUNT: 3, BONUS_MATCH: false },
});

export const PROFIT_ROUND_DECIMAL_PLACE = 1;

export const INPUT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

export const ERROR_MESSAGE = Object.freeze({
  INVALID_AMOUNT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  EMPTY_INPUT: '[ERROR] 공백이 입력되었습니다.',
  INVALID_NUMBER_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  NOT_A_NUMBER: '[ERROR] 숫자만 입력 가능합니다.',
  NON_POSITIVE_AMOUNT: '[ERROR] 구입 금액은 1,000원 이상의 양수여야 합니다.',
  INVALID_DECIMAL: '[ERROR] 정수만 입력 가능합니다.',
  INVALID_RANGE: '[ERROR] 1~45 사이의 숫자만 입력 가능합니다.',
  DUPLICATE_NUMBER: '[ERROR] 중복되지 않은 숫자만 입력 가능합니다.',
  BONUS_DUPLICATE: '[ERROR] 당첨 번호와 중복되지 않은 숫자여야 합니다.',
  INVALID_WIN_NUMBER_COUNT: '[ERROR] 당첨 번호는 6개여야 합니다.',
  INVALID_BONUS_COUNT: '[ERROR] 보너스 번호는 1개여야 합니다.',
});

export const OUTPUT_MESSAGE = Object.freeze({
  PURCHASED_COUNT: '개를 구매했습니다.',
  WINNING_RATE: '당첨통계\n---',
  MATCH_THREE: '3개 일치 (5,000원) - ',
  MATCH_FOUR: '4개 일치 (50,000원) - ',
  MATCH_FIVE: '5개 일치 (1,500,000원) - ',
  MATCH_FIVE_WITH_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  MATCH_SIX: '6개 일치 (2,000,000,000원) - ',
  PROFIT_RATE_PREFIX: '총 수익률은 ',
  PROFIT_RATE_SUFFIX: '%입니다.',
  COUNT: '개',
});
