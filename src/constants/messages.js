export const PROMPT_MSG = Object.freeze({
  PURCHASE_AMOUNT: '구입 금액을 입력해 주세요. (1,000원 단위)',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요. (쉼표로 구분)',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
});

export const ERROR_MSG = Object.freeze({
  INVALID_AMOUNT: '구입 금액은 1,000원 단위여야 합니다.',
  INVALID_NUMBER_RANGE: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INVALID_WINNING_NUMBERS: '로또 번호는 6개여야 합니다.',
  DUPLICATE_NUMBERS: '번호는 중복되지 않아야 합니다.',
  INVALID_BONUS_NUMBER: '보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
});

export const RESULT_MSG = Object.freeze({
  LOTTO_COUNT: (count) => `${count}개를 구매했습니다.`,
  TICKET_NUMBERS: (ticket) => `[${ticket.join(', ')}]`,
  WINNING_STATS_HEADER: '당첨 통계\n---',
  MATCH_RESULT: {
    MATCH_3: '3개 일치 (5,000원)',
    MATCH_4: '4개 일치 (50,000원)',
    MATCH_5: '5개 일치 (1,500,000원)',
    MATCH_5_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원)',
    MATCH_6: '6개 일치 (2,000,000,000원)',
  },
  YIELD: (yieldRate) => `총 수익률은 ${yieldRate}%입니다.`,
});
