export const INPUT_MESSAGE = Object.freeze({
  PROMPT_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  PROMPT_WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  PEOMPR_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
});

export const PRINT_MESSAGE = Object.freeze({
  PRINT_LOTTO_COUNT: "{lottoCount}개를 구매했습니다.",
});

export const ERROR_MESSAGE = Object.freeze({
  INVALID_PURCHASE_AMOUNT: "구입금액은 양의 정수로만 입력이 가능합니다.\n",
  NOT_THOUSAND_PURCHASE_AMOUNT:
    "구입금액은 1000원단위로만 입력이 가능합니다.\n",
});

export const START_ERROR = Object.freeze({
  START_ERROR_MESSAGE: "[ERROR]",
});

export const LOTTO_ERROR_MESSAGE = Object.freeze({
  NOT_SIX_NUMBER: "[ERROR] 로또 번호는 6개여야 합니다.",
  NOT_RANGE_NUMBER: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  NOT_SAME_NUMBER: "[ERROR] 로또 번호에 중복된 숫자가 포함될 수 없습니다.",
});

export const WINNING_NUMBER_MESSAGE = Object.freeze({
  NOT_SIX_NUMBER: "당첨 번호는 6개여야 합니다.",
  NOT_RANGE_NUMBER: "당첨 번호는 1부터 45 사이의 숫자여야 합니다.",
  NOT_SAME_NUMBER: "당첨 번호에 중복된 숫자가 포함될 수 없습니다.",
  INVALID_WINNING_NUMBER: "당첨 번호는 양의 정수만 입력이 가능합니다.",
});

export const BONUS_NUMBER_MESSAGE = Object.freeze({
  NOT_RANGE_NUMBER: "보너스 번호는 1부터 45 사이의 숫자여야 합니다.",
  INVALID_BONUS_NUMBER: "보너스 번호는 양의 정수만 입력이 가능합니다.",
  WINNING_IN_BONUS: "보너스 번호는 당첨 번호들을 제외하고 가능합니다.",
});

export const WINNING_STATS_HEADER = "\n당첨 통계\n---";
