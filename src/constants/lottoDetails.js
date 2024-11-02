export const LOTTO_RESULT = Object.freeze({
  WINNING_STATISTICS : "\n당첨 통계",
  DIVIDING_LINE : "---",

  printLottoStatistic([fifth, fourth, third, second, first]) {
    return [
      `3개 일치 (5,000원) - ${fifth}개`,
      `4개 일치 (50,000원) - ${fourth}개`,
      `5개 일치 (1,500,000원) - ${third}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개`,
      `6개 일치 (2,000,000,000원) - ${first}개`,
    ];
  },
  printProfit(profit) {
    return `총 수익률은 ${profit}%입니다.`;
  }
});

export const RANK = [
  "firstPlace",
  "thirdPlace",
  "fourthPlace",
  "fifthPlace",
  "blank",
  "blank",
  "blank",
  "secondPlace",
];

export const PRICE = {
  firstPlace : 2000000000,
  secondPlace : 30000000,
  thirdPlace : 1500000,
  fourthPlace : 50000,
  fifthPlace : 5000
}