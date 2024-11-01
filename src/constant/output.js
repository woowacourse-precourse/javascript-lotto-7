const OUTPUT_MESSAGES = Object.freeze({
  PROFIT_RATE: {
    HEAD: '총 수익률은 ',
    TAIL: '%입니다.',
  },
  QUANTITY: '개를 구매했습니다.',
  WINNING_STATS: {
    HEAD_MESSAGE: '\n당첨 통계\n---',
    COUNT: '개',
    FIRST: '6개 일치 (2,000,000,000원) - ',
    SECOND: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    THIRD: '5개 일치 (1,500,000원) - ',
    FOURTH: '4개 일치 (50,000원) - ',
    FIFTH: '3개 일치 (5,000원) - ',
  },
  PRINT_ORDER: ['FIFTH', 'FOURTH', 'THIRD', 'SECOND', 'FIRST'],
});

export default OUTPUT_MESSAGES;
