export const LOTTO_PRICE_PER_TICKET = 1_000;
export const PERCENTAGE_FACTOR = 100;

export const LOTTO_CONFIG = Object.freeze({
  NUMBERS_COUNT: 6,
  NUMBER_RANGE: {
    MIN: 1,
    MAX: 45,
  },
});

export const INPUT_MESSAGES = Object.freeze({
  PURCHASE_PRICE: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  ERROR: '[ERROR] 입력을 처리하는 도중 문제가 발생했습니다. 다시 시도해주세요.',
});

export const OUTPUT_MESSAGES = Object.freeze({
  PURCHASE_COUNT: '\n{count}개를 구매했습니다.',
  WINNING_STATISTICS_HEADER: '\n당첨 통계\n---',
  REVENUE_STATEMENT: '총 수익률은 {revenue}%입니다.',
});

export const VALIDATE_MESSAGES = Object.freeze({
  PURCHASE_PRICE: {
    NUMBER: '[ERROR] 로또 구입 금액이 숫자가 아닙니다. 다시 입력해주세요.',
    INTEGER: '[ERROR] 로또 구입 금액이 정수가 아닙니다. 다시 입력해주세요.',
    RANGE: '[ERROR] 로또 구입 금액은 1,000원 이상 2,000,000,000원 이하로 입력해 주세요.',
    THOUSAND: '[ERROR] 로또 구입 금액은 1,000원 단위로 입력해 주세요.',
  },

  LOTTO_NUMBERS: {
    COUNT: '[ERROR] 로또 당첨 번호는 6개여야 합니다. 다시 입력해주세요.',
    NUMBER: '[ERROR] 로또 당첨 번호가 숫자가 아닙니다. 다시 입력해주세요.',
    INTEGER: '[ERROR] 로또 당첨 번호가 정수가 아닙니다. 다시 입력해주세요.',
    RANGE: '[ERROR] 로또 당첨 번호는 1 이상 45 이하의 숫자로 입력해 주세요.',
    DUPLICATE: '[ERROR] 로또 당첨 번호에 중복된 숫자가 있습니다. 다시 입력해주세요.',
  },
  
  BONUS_NUMBER: {
    NUMBER: '[ERROR] 보너스 번호가 숫자가 아닙니다. 다시 입력해주세요.',
    INTEGER: '[ERROR] 보너스 번호가 정수가 아닙니다. 다시 입력해주세요.',
    RANGE: '[ERROR] 보너스 번호는 1 이상 45 이하의 숫자로 입력해 주세요.',
    DUPLICATE: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  },
});

export const MATCH_CODE = Object.freeze({
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  FIVE_WITH_BONUS: 5.5,
  SIX: 6,
});

export const MATCH_PRICE = Object.freeze({
  [MATCH_CODE.THREE]: 5_000,
  [MATCH_CODE.FOUR]: 50_000,
  [MATCH_CODE.FIVE]: 1_500_000,
  [MATCH_CODE.FIVE_WITH_BONUS]: 30_000_000,
  [MATCH_CODE.SIX]: 2_000_000_000,
});

export const MATCH_WINNING_DETAILS = Object.freeze({
  [MATCH_CODE.THREE]: (winningCount) => `3개 일치 (5,000원) - ${winningCount}개`,
  [MATCH_CODE.FOUR]: (winningCount) => `4개 일치 (50,000원) - ${winningCount}개`,
  [MATCH_CODE.FIVE]: (winningCount) => `5개 일치 (1,500,000원) - ${winningCount}개`,
  [MATCH_CODE.FIVE_WITH_BONUS]: (winningCount) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningCount}개`,
  [MATCH_CODE.SIX]: (winningCount) => `6개 일치 (2,000,000,000원) - ${winningCount}개`,
});
