export const ERROR_MESSAGE = {
  PURCHASE_AMOUNT_INPUT: {
    NOT_A_NUMBER: "구입 금액 : 숫자가 아닌 문자가 입력되었습니다.",
    NOT_DIVISION_BY_THOUSAND:
      "구입 금액 : 1000원 단위로 나누어 떨어지지 않습니다.",
  },
  LOTTO_NUMBER_INPUT: {
    NOT_SIX_NUMBERS:
      "로또 번호 : 중복된 번호가 있거나 , 로또 번호가 6개가 아닙니다.",
    NOT_A_NUMBER: "로또 번호 : 숫자가 아닌 문자가 입력되었습니다.",
    OUT_OF_RANGE_1_to_45: "로또 번호 : 1 - 45 범위 밖의 숫자가 입력되었습니다.",
  },
  BONUS_NUMBER_INPUT: {
    NOT_A_NUMBER: "보너스 번호 : 숫자가 아닌 문자가 입력되었습니다.",
    OUT_OF_RANGE_1_to_45:
      "보너스 번호 : 1 - 45 범위 밖의 숫자가 입력되었습니다.",
    DUPLICATED_NUMBER: "보너스 번호 : 기존 번호와 중복됩니다.",
  },
};

export const INPUT_MESSAGE = {
  PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  LOTTO_NUMBER: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

export const OUTPUT_MESSAGE = {
  PURCHASED_COUNT: "개를 구매했습니다.",
  PRIZE_STATISTICS: "당첨 통계\n---",
  FIRST_PRIZE: "6개 일치 (2,000,000,000원) - ",
  SECOND_PRIZE: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  THIRD_PRIZE: "5개 일치 (1,500,000원) - ",
  FOURTH_PRIZE: "4개 일치 (50,000원) - ",
  FIFTH_PRIZE: "3개 일치 (5,000원) - ",
}