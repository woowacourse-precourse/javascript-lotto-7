export const LOTTO_PRICE = 1000;
export const LOTTO_NUMBER_COUNT = 6;
export const LOTTO_NUMBER_RANGE = Object.freeze({ MIN: 1, MAX: 45 });

export const WINNING_PRIZES = Object.freeze({
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
});

export const MATCH_COUNTS = Object.freeze({
  FIRST: 6,
  SECOND: 5,
  THIRD: 5,
  FOURTH: 4,
  FIFTH: 3,
});

export const ERROR_MESSAGES = Object.freeze({
  INVALID_AMOUNT: "[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.",
  INVALID_LOTTO_COUNT: "[ERROR] 로또 번호는 중복되지 않는 6개의 숫자여야 합니다.",
  INVALID_NUMBER_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  BONUS_NUMBER_DUPLICATE: "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
});
