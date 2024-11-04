export const PROGRAM_MESSAGES = {
  PRICE_PROMPT: "구입금액을 입력해 주세요.",
  TRY_NUM_PROMPT: "개를 구매했습니다.",
  WINNING_NUMBER_PROMPT: "\n" + "당첨 번호를 입력해 주세요.",
  BONUS_NUMBER_PROMPT: "\n" + "보너스 번호를 입력해 주세요.",
};

export const STATICS_MESSAGE = {
  RESULT_MESSAGE: "\n" + "당첨 통계" + "\n" + "---" + "\n",
  THREE_MATCHES: "3개 일치 (5,000원) - ",
  FOUR_MATCHES: "4개 일치 (50,000원) - ",
  FIVE_MATCHES: "5개 일치 (1,500,000원) - ",
  BONUS_MATCHES: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  SIX_MATCHES: "6개 일치 (2,000,000,000원) - ",
  RATE_OF_RETURN: (rate) => `총 수익률은 ${rate}%입니다.`,
};
