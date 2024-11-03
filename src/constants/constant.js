const PRIZE = Object.freeze({
  three: 5000,
  four: 50000,
  five: 1500000,
  fiveBonus: 30000000,
  six: 2000000000,
});

const ERROR_MESSAGES = Object.freeze({
  INVALID_LOTTO_NUMBER_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATE_LOTTO_NUMBER: "[ERROR]: 로또 번호는 중복될 수 없습니다.",
  INVALID_LOTTO_NUMBER_RANGE:
    "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
});

export { PRIZE, ERROR_MESSAGES };
