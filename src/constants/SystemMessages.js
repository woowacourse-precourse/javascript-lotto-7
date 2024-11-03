const SYSTEM_MESSAGES = Object.freeze({
  INPUT_MONEY: "구입금액을 입력해 주세요.\n",
  INPUT_LOTTO: "당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS: "보너스 번호를 입력해 주세요.\n",
  OUPUT_STATIC: "당첨 통계\n---\n",

  print_purchase_lotto(number) {
    return `${number}개를 구입했습니다.`;
  },

  print_match_execpt_bonus(number, price, count) {
    return `${number}개 일치 (${price}) - ${count}개`;
  },

  print_match_with_bonus(number, price, count) {
    retrun`${number}개 일치, 보너스 볼 일치 (${price}) - ${count}개`;
  },

  print_rate_of_return(number) {
    return `총 수익률은 ${number}입니다.`;
  },
});
