const ERROR_PREFIX = '[ERROR]';

export const MATCH_PRICE = Object.freeze({
  THREE_MATCH_PRIZE: 5000,
  FOUR_MATCH_PRIZE: 50000,
  FIVE_MATCH_PRIZE: 1500000,
  FIVE_BONUS_MATCH_PRIZE: 30000000,
  SIX_MATCH_PRIZE: 2000000000,
});

export const RANGE = Object.freeze({
  MIN: 1,
  MAX: 45,
});

export const LOTTO_NUMBER_LENGTH = 6;

export const PRICE_RANGE = Object.freeze({
  MIN: 1000,
  MAX: 1000000,
});

export const ERROR_MESSAGE = Object.freeze({
  NUMBER_PRICE: `${ERROR_PREFIX} 구입 금액은 숫자로 입력해 주세요`,
  MIN_PRICE: `${ERROR_PREFIX} 구입 금액은 ${PRICE_RANGE.MIN.toLocaleString('ko-KR')}원 이상 입력해 주세요`,
  UNIT_PRICE: `${ERROR_PREFIX} 구입 금액은 ${PRICE_RANGE.MIN.toLocaleString('ko-KR')}원 단위로 입력해 주세요`,
  MAX_PRICE: `${ERROR_PREFIX} 구입 금액은 ${PRICE_RANGE.MAX.toLocaleString('ko-KR')}원 미만으로 입력해 주세요`,
  LENGTH_WINNING_NUMBERS: `${ERROR_PREFIX} 당첨 번호는 ${LOTTO_NUMBER_LENGTH}개 입력해 주세요`,
  DUPLICATE_WINNIG_NUMBERS: `${ERROR_PREFIX} 당첨 번호는 중복없이 입력해 주세요`,
  INTEGER_WINNING_NUMBERS: `${ERROR_PREFIX} 당첨 번호는 정수로 입력해 주세요`,
  RANGE_WINNING_NUMBERS: `${ERROR_PREFIX} 당첨 번호는 ${RANGE.MIN}~${RANGE.MAX} 사이 수로 입력해 주세요`,
  INTEGER_BONUS_NUMBER: `${ERROR_PREFIX} 보너스 번호는 정수로 입력해 주세요`,
  RANGE_BONUS_NUMBER: `${ERROR_PREFIX} 보너스 번호는 ${RANGE.MIN}~${RANGE.MAX} 사이 수로 입력해 주세요`,
  DUPLICATE_BONUS_NUMBER: `${ERROR_PREFIX} 보너스 번호는 당첨 번호와 중복되지 않게 입력해 주세요`,
});

export const INPUT_MESSAGE = Object.freeze({
  PRICE: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  WINNING_STATISTICS: '당첨 통계\n---\n',
  LOTTO_NUMBER: '개를 구매했습니다.',
  THREE_MATCH: `3개 일치 (${MATCH_PRICE.THREE_MATCH_PRIZE.toLocaleString('ko-KR')}원)`,
  FOUR_MATCH: `4개 일치 (${MATCH_PRICE.FOUR_MATCH_PRIZE.toLocaleString('ko-KR')}원)`, // 수정됨
  FIVE_MATCH: `5개 일치 (${MATCH_PRICE.FIVE_MATCH_PRIZE.toLocaleString('ko-KR')}원)`, // 수정됨
  FIVE_BONUS_MATCH: `5개 일치, 보너스 볼 일치 (${MATCH_PRICE.FIVE_BONUS_MATCH_PRIZE.toLocaleString('ko-KR')}원)`, // 수정됨
  SIX_MATCH: `6개 일치 (${MATCH_PRICE.SIX_MATCH_PRIZE.toLocaleString('ko-KR')}원)`, // 수정됨
});

export const SEPARATOR = ',';
