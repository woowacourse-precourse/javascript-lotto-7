export const LOTTO_TEST_MESSAGES = {
  LOTTO_CLASS_TEST: '로또 클래스 테스트',
  EXCEED_NUMBER_COUNT: '로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.',
  DUPLICATE_NUMBER: '로또 번호에 중복된 숫자가 있으면 예외가 발생한다.',
  COUNT_MATCHING_NUMBERS:
    '당첨 번호와 일치하는 번호의 개수를 올바르게 계산한다.',
  CHECK_BONUS_NUMBER: '보너스 번호 포함 여부를 올바르게 확인한다.',
};

export const BONUS_NUMBER_TEST_MESSAGES = {
  BONUS_NUMBER_TEST: '보너스 번호 검증 테스트',
  NOT_A_NUMBER: '보너스 번호가 숫자가 아니면 예외가 발생한다.',
  OUT_OF_RANGE: '보너스 번호가 1-45 범위를 벗어나면 예외가 발생한다.',
  DUPLICATE_WITH_WINNING: '보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.',
  VALID_NUMBER: '정상적인 보너스 번호는 검증을 통과한다.',
};

export const PURCHASE_AMOUNT_TEST_MESSAGES = {
  PURCHASE_AMOUNT_TEST: '구입 금액 검증 테스트',
  NOT_THOUSAND_UNIT: '1000원 단위가 아닌 금액이 입력되면 예외가 발생한다.',
  NOT_A_NUMBER: '숫자가 아닌 입력이 들어오면 예외가 발생한다.',
  OVERFLOW: '오버플로우를 발생하는 금액이 입력되면 예외가 발생한다.',
  VALID_AMOUNT: '정상적인 구매 금액은 검증을 통과한다.',
};

export const WINNING_NUMBERS_TEST_MESSAGES = {
  WINNING_NUMBERS_TEST: '당첨 번호 검증 테스트',
  INVALID_FORMAT: '쉼표로 구분되지 않은 입력은 예외가 발생한다.',
  INVALID_COUNT: '당첨 번호가 6개가 아닌 경우 예외가 발생한다.',
  OUT_OF_RANGE: '숫자 범위가 1-45를 벗어나면 예외가 발생한다.',
  DUPLICATE_NUMBERS: '중복된 번호가 있으면 예외가 발생한다.',
  VALID_NUMBERS: '정상적인 당첨 번호는 검증을 통과한다.',
};

export const LOTTO_STATISTICS_TEST_MESSAGES = {
  LOTTO_STATISTICS_TEST: '로또 당첨 결과 테스트',
  FIFTH_RANK: '3개 번호 일치는 5등으로 분류된다',
  FOURTH_RANK: '4개 번호 일치는 4등으로 분류된다',
  THIRD_RANK: '5개 번호 일치, 보너스 번호 불일치는 3등으로 분류된다',
  SECOND_RANK: '5개 번호 일치, 보너스 번호 일치는 2등으로 분류된다',
  FIRST_RANK: '6개 번호 일치는 1등으로 분류된다',
  NO_RANK: '2개 이하 번호 일치는 당첨되지 않는다',
  MULTIPLE_RANKS: '여러 개의 당첨을 올바르게 집계한다',
  NO_WINNERS: '당첨 결과가 없으면 모든 당첨 횟수는 0이다',
};

export const LOTTO_PRIZES_TEST_MESSAGES = {
  LOTTO_PRIZES_TEST: '로또 당첨금 계산',
  DESCRIBE_MESSAGES: {
    SINGLE_PRIZE: '단일 등수 당첨금 계산',
    MULTIPLE_PRIZE: '복수 당첨 시 당첨금 계산',
    PROFIT_RATE: '수익률 계산',
  },
  CALCULATE_SINGLE_PRIZES: {
    FIFTH: '5등(3개 일치) 1회 당첨 시 5,000원을 반환한다',
    FOURTH: '4등(4개 일치) 1회 당첨 시 50,000원을 반환한다',
    THIRD: '3등(5개 일치) 1회 당첨 시 1,500,000원을 반환한다',
    SECOND: '2등(5개+보너스 일치) 1회 당첨 시 30,000,000원을 반환한다',
    FIRST: '1등(6개 일치) 1회 당첨 시 2,000,000,000원을 반환한다',
  },
  CALCULATE_MULTIPLE_PRIZES: {
    SAME_RANK: '같은 등수 여러번 당첨 시 당첨금의 합을 반환한다',
    DIFFERENT_RANK: '서로 다른 등수 당첨 시 당첨금의 합을 반환한다',
  },
  CALCULATE_PROFIT_RATE: {
    EQUAL: '당첨금과 구매금액이 같으면 수익률은 100%이다',
    DOUBLE: '당첨금이 구매금액의 2배면 수익률은 200%이다',
    HALF: '당첨금이 구매금액의 절반이면 수익률은 50%이다',
    ZERO: '당첨금이 0원이면 수익률은 0%이다',
    ROUND: '수익률은 소수점 첫째 자리에서 반올림한다',
  },
};
