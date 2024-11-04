export const INPUT_MEESAGE = {
  AMOUNT_INPUT: "구입금액을 입력해 주세요.\n",
  WINNER_INPUT: "당첨 번호를 입력해 주세요.\n",
  BONUS_INPUT: "보너스 번호를 입력해 주세요.\n",
};

export const OUPUT_MESSAGE = {
  RESULT_OUTPUT: "당첨 통계",
  LINE_OUTPUT: "---",
  ZERO_OUTPUT: "총 수익률은 0%입니다.",
};
export const RESULT_MESSAGE = {
  THREE_COUNT: "3개 일치 (5,000원) -",
  FOUR_COUNT: "4개 일치 (50,000원) -",
  FIVE_COUNT: "5개 일치 (1,500,000원) -",
  BONUS_COUNT: "5개 일치, 보너스 볼 일치 (30,000,000원) -",
  SIX_COUNT: "6개 일치 (2,000,000,000원) -"
}

export const AMOUNT_ERROR_MESSAGE = {
  EMPTY: "[ERROR] 금액이 유효하지 않습니다.",
  ISNAN: "[ERROR] 숫자만 입력 가능합니다.",
  MUST_BE_1000: "[ERROR] 1000원 단위로만 입력 가능합니다.",
}

export const WINNER_ERROR_MESSAGE = {
  LENGTH_SIX: "[ERROR] 당첨 번호는 6개 입니다.",
  DUPLICATION: "[ERROR] 당첨 번호는 중복 되면 안됩니다.",
  EMPTY: "[ERROR] 당첨 번호 중 빈칸이 있습니다.",
  OUT_OF_RANGE: "[ERROR] 당첨 번호는 1부터 45까지 입니다.",
  ISNAN: "[ERROR] 당첨 번호 중 숫자가 아닌 것이 있습니다."
}

export const BONUS_ERROR_MESSAGE = {
  DUPLICATION: "[ERROR] 보너스 번호는 중복 되면 안됩니다.",
  EMPTY: "[ERROR] 보너스 번호 중 빈칸이 있습니다.",
  OUT_OF_RANGE: "[ERROR] 보너스 번호는 1부터 45까지 입니다.",
  ISNAN: "[ERROR] 보너스 번호 중 숫자가 아닌 것이 있습니다."
}
export const LOTTO_ERROR_MESSAGE = {
  LENGTH_SIX: "[ERROR] 로또 번호는 6개 입니다.",
  DUPLICATION: "[ERROR] 로또 번호는 중복 되면 안됩니다.",
  EMPTY: "[ERROR] 로또 번호 중 빈칸이 있습니다.",
  OUT_OF_RANGE: "[ERROR] 로또 번호는 1부터 45까지 입니다.",
  ISNAN: "[ERROR] 로또 번호 중 숫자가 아닌 것이 있습니다."
}