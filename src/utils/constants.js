export const INPUT_MESSAGES = {
  PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
};

export const OUTPUT_MESSAGES = {};

export const ERROR_MESSAGE = {
  ERROR_MESSAGE_PREFIX: "[ERROR]",
  INVALID_ISNAN: "구입 금액은 숫자여야 합니다.",
  INVALID_PURCHASE: "구입 금액은 1,000원 단위여야 합니다.",
  INVALID_WINNING_NUMBERS: "당첨 번호는 6개여야 합니다.",
  DUPLICATE_NUMBER: "당첨 번호는 중복될 수 없습니다.",
  NUMBER_OUT_OF_RANGE: "로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  DUPLICATE_BONUS_NUMBER: "보너스 번호는 당첨 번호와 중복될 수 없습니다.",
};

export const LOTTO_PRICE = 1000;
