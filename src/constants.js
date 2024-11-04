export const INPUT = {
  MONEY: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
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
    INVALID_UNIT: "[ERROR] 금액은 1000으로 나누어 떨어져야 합니다.",
  },
};
