export const SYSTEM_MESSAGES = Object.freeze({
  INPUT_MONEY: "구입금액을 입력해 주세요.\n",
  INPUT_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS: "\n보너스 번호를 입력해 주세요.\n",
  OUPUT_STATIC: "\n당첨 통계\n---\n",

  print_purchase_lotto(number) {
    return `\n${number}개를 구매했습니다.`;
  },

  print_match_execpt_bonus(number, price, count) {
    return `${number}개 일치 (${price}원) - ${count}개\n`;
  },

  print_match_with_bonus(number, price, count) {
    return `${number}개 일치, 보너스 볼 일치 (${price}원) - ${count}개\n`;
  },

  print_rate_of_return(number) {
    return `총 수익률은 ${number}%입니다.`;
  },
});
