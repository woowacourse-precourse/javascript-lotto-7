const ERROR_PREFIX = "[ERROR] ";

export const LOTTO_CONSTANTS = {
  PRICE: 1000,
  SIZE: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
};

export const PRIZE_MONEY = {
  FIRST: 2000000000, // 6개 일치
  SECOND: 30000000, // 5개 + 보너스
  THIRD: 1500000, // 5개 일치
  FOURTH: 50000, // 4개 일치
  FIFTH: 5000, // 3개 일치
  MISS: 0,
};

export const INPUT_MESSAGES = {
  REQUEST_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  REQUEST_WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
  REQUEST_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

export const OUTPUT_MESSAGES = {
  PURCHASE_COUNT: (count) => `${count}개를 구매했습니다.`,
  STATISTICS_HEADER: "당첨 통계",
  STATISTICS_DIVIDER: "---",
  MATCH_THREE: (count) => `3개 일치 (5,000원) - ${count}개`,
  MATCH_FOUR: (count) => `4개 일치 (50,000원) - ${count}개`,
  MATCH_FIVE: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  MATCH_FIVE_BONUS: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  MATCH_SIX: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

export const ERROR_MESSAGES = {
  INVALID_PURCHASE_AMOUNT: `${ERROR_PREFIX}구입 금액은 1,000원 단위여야 합니다.`,
  INVALID_NUMBER_RANGE: `${ERROR_PREFIX}로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
  DUPLICATE_NUMBER: `${ERROR_PREFIX}중복된 숫자는 사용할 수 없습니다.`,
  INVALID_NUMBER_COUNT: `${ERROR_PREFIX}6개의 숫자를 입력해야 합니다.`,
  INVALID_BONUS_NUMBER: `${ERROR_PREFIX}보너스 번호는 당첨 번호와 중복될 수 없습니다.`,
  INVALID_INPUT: `${ERROR_PREFIX}올바른 입력이 아닙니다.`,
};