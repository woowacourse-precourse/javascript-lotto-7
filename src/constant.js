export const ERROR_MESSAGES = {
  LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATED_NUMBER: "[ERROR] 중복되는 숫자는 존재할 수 없습니다.",
  NOT_IN_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  COAST_WITH_NUMBER: "[ERROR] 구입 금액은 숫자여야 합니다.",
  COAST_UNIT: (coastUnit) =>
    `[ERROR] 구입 금액은 ${coastUnit}원 단위여야 합니다.`,
  COAST_MUST_BE_POSITIVE: "[ERROR] 구입 금액은 양수여야 합니다.",
};

export const LOTTO_MIN_NUMBER = 1;
export const LOTTO_MAX_NUMBER = 45;

export const LOTTO_NUMBER_AMOUNT = 6;

export const LOTTO_COAST_UNIT = 1000;

export const LOTTO_FIRST_PRIZE = 2000000000;
export const LOTTO_SECOND_PRIZE = 30000000;
export const LOTTO_THIRD_PRIZE = 1500000;
export const LOTTO_FOURTH_PRIZE = 50000;
export const LOTTO_FIFTH_PRIZE = 5000;
