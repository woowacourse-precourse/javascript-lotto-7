export const PRIZE = {
  3: 5000,
  4: 50000,
  5: 1500000,
  5.5: 30000000,
  6: 2000000000,
};

export const ERROR = {
  INPUT: {
    NOT_A_NUMBER: "[ERROR] 숫자를 입력해야 합니다.",
    NOT_IN_RANGE: "[ERROR] 로또 번호는 1이상 45이하를 입력해야 합니다.",
    NOT_A_POSITIVE_NUMBER: "[ERROR] 0이상의 금액을 입력해야 합니다.",
  },
  LOTTO: {
    INVALID_NUMBER_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
    CANT_BE_DUPLICATED: "[ERROR] 로또 번호는 중복될 수 없습니다.",
  },
  GENERATOR: {
    MUST_BE_MULTIPLE_OF_1000: "[ERROR] 1000원 단위로 금액을 입력해야 합니다.",
  },
  RANKER: {
    CANT_BE_DUPLICATED: "[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.",
  },
};

export const MESSAGE = {
  INPUT: {
    PAYMENT: "구입금액을 입력해 주세요.\n",
    WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
    BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  },
  OUTPUT: {
    STATISTICS: "당첨 통계\n---",
  },
};
