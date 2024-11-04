const RANDOM_NUMBER_START = 1;
const RANDOM_NUMBER_END = 45;
const LOTTO_NUMBER_COUNT = 6;
const PURCHASE_AMOUNT_DIVISOR = 1000;
const TOTAL_PRIZE_RANKS = 5;

const PRIZE_AMOUNTS = {
  PRIZE_AMOUNT_FIRST: 2000000000,
  PRIZE_AMOUNT_SECOND: 30000000,
  PRIZE_AMOUNT_THIRD: 1500000,
  PRIZE_AMOUNT_FOURTH: 50000,
  PRIZE_AMOUNT_FIFTH: 5000,
};

const PRIZE_RANKS = {
  FIRST: { rank: '6개 일치', amount: '2,000,000,000' },
  SECOND: { rank: '5개 일치, 보너스 볼 일치', amount: '30,000,000' },
  THIRD: { rank: '5개 일치', amount: '1,500,000' },
  FOURTH: { rank: '4개 일치', amount: '50,000' },
  FIFTH: { rank: '3개 일치', amount: '5,000' },
};

const ERROR_MESSAGES = {
  PURCHASE_AMOUNT_DIVISIBILITY:
    '[ERROR] 구입 금액은 1,000원으로 나누어 떨어져야 합니다.',
  EMPTY_INPUT: '[ERROR] 입력값이 비어있습니다. 유효한 값을 입력해야 합니다.',
  NOT_A_NUMBER: '[ERROR] 숫자를 입력해야 합니다.',

  DUPLICATE_WINNING_NUMBERS: '[ERROR] 중복된 당첨 번호가 있습니다.',
  WINNING_NUMBERS_LENGTH_ERROR: '[ERROR] 당첨 번호는 반드시 6개여야 합니다.',

  BONUS_UNIQUE_ERROR: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  BONUS_LENGTH_ERROR: '[ERROR] 보너스 번호는 반드시 1개여야 합니다.',

  LOTTO_NUMBER_DUPLICATE: '[ERROR] 중복된 로또 번호가 있습니다.',
  LOTTO_NUMBER_OUT_OF_RANGE: '[ERROR] 로또 번호는 1~45 사이여야 합니다.',
  LOTTO_NUMBER_NOT_A_NUMBER: '[ERROR] 로또 번호는 숫자여야 합니다.',
  LOTTO_NUMBER_LENGTH_ERROR: '[ERROR] 로또 번호는 반드시 6개여야 합니다.',
};

export {
  RANDOM_NUMBER_START,
  RANDOM_NUMBER_END,
  LOTTO_NUMBER_COUNT,
  PURCHASE_AMOUNT_DIVISOR,
  TOTAL_PRIZE_RANKS,
  PRIZE_AMOUNTS,
  PRIZE_RANKS,
  ERROR_MESSAGES,
};
