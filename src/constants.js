export const CONSTANTS = {
  LOTTO_PRICE: 1000,

  MESSAGE_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  MESSAGE_PURCHASED_TICKETS: '개를 구매했습니다.',
  MESSAGE_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.',
  MESSAGE_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.',
  MESSAGE_WINNING_STATISTICS: '\n당첨 통계\n---',
  MESSAGE_PROFIT_RATE: '총 수익률은',

  WINNING_RANKS: {
    THREE_MATCH: { prize: 5000, message: '3개 일치 (5,000원) - ' },
    FOUR_MATCH: { prize: 50000, message: '4개 일치 (50,000원) - ' },
    FIVE_MATCH: { prize: 1500000, message: '5개 일치 (1,500,000원) - ' },
    FIVE_MATCH_BONUS: {
      prize: 30000000,
      message: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    },
    SIX_MATCH: {
      prize: 2000000000,
      message: '6개 일치 (2,000,000,000원) - ',
    },
  },

  ERROR_INVALID_AMOUNT:
    '[ERROR] 금액은 1000으로 나누어 떨어지는 숫자만 입력 가능합니다.',
  ERROR_INVALID_WINNING_NUMBERS:
    '[ERROR] 숫자가 중복됩니다. 당첨 번호는 1~45 범위 내의 중복되지 않는 6개의 숫자값이어야 합니다.',
  ERROR_INVALID_RANGE:
    '[ERROR] 입력 가능한 숫자 범위를 넘습니다. 번호는 1~45 범위 중 하나여야 합니다.',
  ERROR_INSUFFICIENT_NUMBERS:
    '[ERROR] 입력된 숫자값이 모자릅니다. 6개의 숫자가 입력되어야 합니다.',
  ERROR_DUPLICATE_BONUS_NUMBER:
    '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
};
