export const PROMPT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
});

export const OUTPUT_MESSAGE = Object.freeze({
  PURCHASE_COUNT: '개를 구매했습니다.',
  RESULT_STATISTICS: '당첨 통계\n---',
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
    5.5: 30000000,
    6: 2000000000,
  }),
});

export const ERROR_PREFIX = '[ERROR] ';
