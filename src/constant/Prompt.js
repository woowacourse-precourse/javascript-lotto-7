const INPUT_PROMPT = Object.freeze({
  COST: "구입금액을 입력해 주세요.\n",
  WINNING_LOTTO: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
});

const OUTPUT_PROMPT = Object.freeze({
  PURCHASE: "{count}개를 구매했습니다.",
  LOTTO_NUMBERS: "[{numbers}]",
  STAT_HEADER: "당첨 통계\n---",
  MATCH_STAT: "{matchCount}개 일치 ({prize}원) - {count}개",
  MATCH_STAT_BONUS: "{matchCount}개 일치, 보너스 볼 일치 ({prize}원) - {count}개",
  PROFIT_RATE: "총 수익률은 {rate}%입니다.",
});

export { INPUT_PROMPT, OUTPUT_PROMPT };
