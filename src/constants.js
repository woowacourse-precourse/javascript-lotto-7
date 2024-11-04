export const INPUT = {
  MONEY: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

export const LOTTO_RANGE = {
  START: 1,
  END: 45,
  COUNT: 6,
  PRICE: 1000,
};

export const PRIZE_MONEY = {
  FIFTH: 5000, // 3개 일치
  FOURTH: 50000, // 4개 일치
  THIRD: 1500000, // 5개 일치
  SECOND: 30000000, // 5개 + 보너스
  FIRST: 2000000000, // 6개 일치
};

export const OUTPUT = {
  PURCHASE: (count) => `${count}개를 구매했습니다.`,
  MATCH_RESULT: {
    THREE: (count) =>
      `3개 일치 (${PRIZE_MONEY.FIFTH.toLocaleString()}원) - ${count}개`,
    FOUR: (count) =>
      `4개 일치 (${PRIZE_MONEY.FOURTH.toLocaleString()}원) - ${count}개`,
    FIVE: (count) =>
      `5개 일치 (${PRIZE_MONEY.THIRD.toLocaleString()}원) - ${count}개`,
    FIVE_WITH_BONUS: (count) =>
      `5개 일치, 보너스 볼 일치 (${PRIZE_MONEY.SECOND.toLocaleString()}원) - ${count}개`,
    SIX: (count) =>
      `6개 일치 (${PRIZE_MONEY.FIRST.toLocaleString()}원) - ${count}개`,
  },
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

export const ERROR = {
  LOTTO: {
    EMPTY_NUMBER: "[ERROR] 로또 번호는 공백일 수 없습니다.",
    INVALID_NUMBER: "[ERROR] 로또 번호는 숫자여야 합니다.",
    NOT_INTEGER: "[ERROR] 로또 번호는 정수여야 합니다.",
    INVALID_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  },
  LOTTO_ARRAY: {
    INVALID_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
    DUPLICATE_NUMBER: "[ERROR] 로또 번호는 중복될 수 없습니다.",
  },
  MONEY: {
    EMPTY_NUMBER: "[ERROR] 금액은 공백일 수 없습니다.",
    INVALID_NUMBER: "[ERROR] 금액은 숫자여야 합니다.",
    INVALID_UNIT: `[ERROR] 금액은 ${LOTTO_RANGE.PRICE}으로 나누어 떨어져야 합니다.`,
  },
};
