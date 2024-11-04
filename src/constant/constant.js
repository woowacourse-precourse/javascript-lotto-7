export const INPUT_MESSAGES = Object.freeze({
  MONEY: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGES = Object.freeze({
  LOTTO_AMOUNT: (amount) => `${amount}개를 구매했습니다.`,
  LOTTO_SET: (lottoNumbers) => `[${lottoNumbers.join(', ')}]`,
  STATISTIC: '당첨 통계\n---',
  STATISTIC_TABLE: (rank, count, prize) =>
    `${STATISTIC_MESSAGES[rank](count, prize)}`,
  PROFIT_RATE: (profitRate) => `총 수익률은 ${profitRate}%입니다.`,
});

export const LOTTO = Object.freeze({
  PRICE: 1000,
  LENGTH: 6,
  MIN_NUM: 1,
  MAX_NUM: 45,
});

export const REGEX = Object.freeze({
  IS_VALID_WINNING_NUMBERS:
    /^(0?[1-9]|[1-3][0-9]|4[0-5])(,(0?[1-9]|[1-3][0-9]|4[0-5])){5}$/,
});

export const RANKS = Object.freeze({
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THIRD: 'THIRD',
  FOURTH: 'FOURTH',
  FIFTH: 'FIFTH',
  NONE: 'NONE',
});

export const INITIAL_STATISTICS = Object.freeze({
  [RANKS.FIFTH]: 0,
  [RANKS.FOURTH]: 0,
  [RANKS.THIRD]: 0,
  [RANKS.SECOND]: 0,
  [RANKS.FIRST]: 0,
});

export const PRIZE_MONEY = Object.freeze({
  [RANKS.FIRST]: 2_000_000_000,
  [RANKS.SECOND]: 30_000_000,
  [RANKS.THIRD]: 1_500_000,
  [RANKS.FOURTH]: 50_000,
  [RANKS.FIFTH]: 5_000,
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
  INVALID_WINNING_NUMBER_FORMAT:
    '당첨 번호는 쉼표(,)를 기준으로 구분된 숫자입니다.',
});
