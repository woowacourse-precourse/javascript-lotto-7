const MESSAGES = {
  IO: {
    INPUT: {
      PRICE: '구입금액을 입력해 주세요.',
      WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
      BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
    },
    OUTPUT: {
      PURCHASED_LOTTO_COUNT: (count) => `${count}개를 구매했습니다.`,
      WINNING_STATISTICS: '당첨 통계\n---',
      MATCH_RESULT: (count, prize, matchedCount) => `${count}개 일치 (${prize.toLocaleString()}원) - ${matchedCount}개`,
      BONUS_MATCH_RESULT: (count, prize, matchedCount) =>
        `${count}개 일치, 보너스 볼 일치 (${prize.toLocaleString()}원) - ${matchedCount}개`,
      TOTAL_RATE_OF_RETURN: (rate) => `총 수익률은 ${rate}%입니다.`,
    },
  },
  ERROR: {
    PRICE: {
      SHOULD_BE_NUMBER: '구입 금액은 숫자여야 합니다.',
      SHOULD_BE_POSITIVE: '구입 금액은 0보다 커야 합니다.',
      SHOULD_BE_MULTIPLIED_BY_PRICE_UNIT: '구입 금액은 1,000원 단위로 입력해야 합니다.',
    },
    LOTTO_NUMBER: {
      SHOULD_BE_SIX: '로또 번호는 6개여야 합니다.',
      SHOULD_BE_UNIQUE: '로또 번호는 중복되지 않아야 합니다.',
      SHOULD_BE_IN_RANGE: '로또 번호는 1~45 사이의 숫자여야 합니다.',
    },
    BONUS_NUMBER: {
      SHOULD_BE_NUMBER: '보너스 번호는 숫자여야 합니다.',
      SHOULD_BE_IN_RANGE: '보너스 번호는 1~45 사이의 숫자여야 합니다.',
      SHOULD_NOT_BE_DUPLICATED: '보너스 번호는 당첨 번호와 중복되면 안됩니다.',
    },
  },
};

const PRICE_UNIT = 1000;
const WINNING_NUMBERS_SEPARATOR = ',';
const LOTTO_JOIN_SEPARATOR = ', ';

const MATCH_OPTIONS = [
  { count: 3, isBonus: false, prize: 5000 },
  { count: 4, isBonus: false, prize: 50_000 },
  { count: 5, isBonus: false, prize: 1_500_000 },
  { count: 5, isBonus: true, prize: 30_000_000 },
  { count: 6, isBonus: false, prize: 2_000_000_000 },
];

export { MESSAGES, PRICE_UNIT, WINNING_NUMBERS_SEPARATOR, LOTTO_JOIN_SEPARATOR, MATCH_OPTIONS };
