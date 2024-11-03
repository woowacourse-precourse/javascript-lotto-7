export const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGES = {
  PURCHASE_PRICE: {
    NOT_A_NUMBER: '구입금액은 숫자로만 입력 가능합니다.',
    INVALID_UNIT: '구입금액은 1,000원 단위로 입력해야 합니다.',
  },
  WINNING_NUMBER: {
    INVALID_COMMA: '당첨 번호를 구분하는 쉼표(,)를 포함해 입력해야 합니다.',
    INVALID_COUNT: '당첨 번호는 6개를 입력해야 합니다.',
    DUPLICATION_NUMBER: '당첨 번호는 중복 없이 입력해야 합니다.',
    SPECIAL_SYMBOL: '쉼표(,) 외의 특수 문자는 사용할 수 없습니다.',
    OUT_OF_RANGE: '당첨 번호는 1부터 45 사이의 숫자여야 합니다.',
    NOT_A_NUMBER: '당첨 번호는 숫자로 입력해야 합니다.',
  },
  BONUS_NUMBER: {
    DUPLICATION_NUMBER: '당첨 번호와 중복되지 않는 숫자여야 합니다.',
    OUT_OF_RANGE: '보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
    NOT_A_NUMBER: '보너스 번호는 숫자로 입력해야 합니다.',
  },
  INPUT_ERROR: '입력 중 오류가 발생했습니다.',
  EMPTY_INPUT: '입력값으로 빈값을 입력할 수 없습니다.',
};

export const LOTTO = {
  LOTTO_PRICE: 1000,
  LOTTO_NUMBER_COUNT: 6,
  LOTTO_NUMBER_RANGE_MIN: 1,
  LOTTO_NUMBER_RANGE_MAX: 45,
  LOTTO_NUMBER_SEPARATOR: ',',
  PROFIT_RATE_DECIMAL_PLACE: 1,
  FIRST_PLACE_MATCH_COUNT: 6,
  SECOND_PLACE_MATCH_COUNT: 5,
  MIN_WINNING_MATCH_COUNT: 3,
  MATCH_COUNT_BASE: 8,
  FIRST_PLACE_RANK: 1,
  SECOND_PLACE_RANK: 2,
};

export const INPUT_MESSAGE = {
  PURCHASE_PRICE: '\n구입금액을 입력해 주세요.',
  WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.',
  RESULT: '\n당첨 통계\n---',
};
