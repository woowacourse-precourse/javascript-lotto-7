export const INPUT_MESSAGE = Object.freeze({
  purchaseAmountPrompt: '구입금액을 입력해 주세요.\n',
  purchaseMessage: (count) => `\n${count}개를 구매했습니다.`,
  winningNumbersPrompt: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumberPrompt: '\n보너스 번호를 입력해 주세요\n',
  winningTotalMessage: '\n당첨 통계\n---',
  match3Message: (count) => `3개 일치 (5,000원) - ${count}개`,
  match4Message: (count) => `4개 일치 (50,000원) - ${count}개`,
  match5Message: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  match5WithBonusMessage: (count) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  match6Message: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  totalProfitMessage: (rate) => `총 수익률은 ${rate}%입니다.`,
});
