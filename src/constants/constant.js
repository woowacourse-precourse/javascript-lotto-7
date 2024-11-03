export const PRIZE = Object.freeze({
  THREE: 5000,
  FOUR: 50000,
  FIVE: 1500000,
  FIVEBONUS: 30000000,
  SIX: 2000000000,
});

export const ERROR_MESSAGES = Object.freeze({
  INVALID_LOTTO_NUMBER_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_LOTTO_NUMBER: "[ERROR] 유효하지 않은 당첨 번호입니다.",
  INVALID_BONUS_NUMBER: "[ERROR] 유효하지 않은 보너스 번호입니다.",
  DUPLICATE_LOTTO_NUMBER: "[ERROR]: 로또 번호는 중복될 수 없습니다.",
  INVALID_LOTTO_NUMBER_RANGE:
    "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  DUPLICATE_BONUS_NUMBER_WITH_WINNING:
    "[ERROR]: 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
  PURCHASE_AMOUNT_ZERO: "[ERROR]: 구입 금액은 0을 입력할 수 없습니다.",
  PURCHASE_AMOUNT_NEGATIVE: "[ERROR]: 구입 금액은 음수를 입력할 수 없습니다.",
  INVALID_PURCHASE_AMOUNT:
    "[ERROR]: 구입 금액은 1,000원 단위로 입력 가능합니다.",
  PURCHASE_AMOUNT_EMPTY: "[ERROR]: 구입 금액에 빈 문자열을 입력할 수 없습니다.",
});

export const MESSAGE_STATISTICS = (num) =>
  Object.freeze({
    HEADER: "\n당첨 통계\n---",
    COUNT: `${num}개를 구매했습니다.`,
    MATCH_THREE: `3개 일치 (5,000원) - ${num}개`,
    MATCH_FOUR: `4개 일치 (50,000원) - ${num}개`,
    MATCH_FIVE: `5개 일치 (1,500,000원) - ${num}개`,
    MATCH_FIVE_BONUS: `5개 일치, 보너스 볼 일치 (30,000,000원) - ${num}개`,
    MATCH_SIX: `6개 일치 (2,000,000,000원) - ${num}개`,
    RATE: `총 수익률은 ${num}%입니다.`,
  });
