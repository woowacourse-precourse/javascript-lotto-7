export const PROMPT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '\n구입금액을 입력해 주세요\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  PURCHASE_COUNT: '개를 구매했습니다.',
  RESULT_STATISTICS: '\n당첨 통계\n---',
  TOTAL_PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.\n`,
});

export const LOTTO = Object.freeze({
  START_NUMBER: 1,
  END_NUMBER: 45,
  COUNT: 6,
  PRICE: 1000,

  WINNING_AMOUNT: Object.freeze({
    3: 5000,
    4: 50000,
    5: 1500000,
    '5+bonus': 30000000,
    6: 2000000000,
  }),

  STATISTICS_ORDER: Object.freeze(['3', '4', '5', '5+bonus', '6']),
});
