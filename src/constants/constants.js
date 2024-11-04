const LOTTO_TICKET_PRICE = 1000;

const USER_PROMPT_MESSAGES = Object.freeze({
  GET_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  GET_WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
  GET_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

const CONFIRMATION_MESSAGES = Object.freeze({
  PURCHASE_COMPLETE_MESSAGE: (count) => `${count}개를 구매했습니다.`,
  WINNING_STATISTICS_HEADER: '당첨 통계\n---',
  TOTAL_YIELD_MESSAGE: (rate) => `총 수익률은 ${rate}%입니다.`,
});

const ERROR_MESSAGES = Object.freeze({
  INVALID_EMPTY_INPUT:
    '[ERROR] 아무것도 입력하지 않았습니다. 값을 입력해 주세요.',
  INVALID_PURCHASE_AMOUNT_NOT_NUMBER:
    '[ERROR] 구입 금액은 숫자만 입력해 주세요.',
  INVALID_PURCHASE_AMOUNT_NOT_TICKET_UNIT:
    '[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.',
  INVALID_LOTTO_NUMBER_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_DUPLICATE_NUMBERS: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
  INVALID_WINNING_NUMBER:
    '[ERROR] 당첨 번호는 1~45 사이의 숫자여야 하며, 중복되지 않아야 합니다.',
  INVALID_BONUS_NUMBER:
    '[ERROR] 보너스 번호는 1~45 사이의 숫자여야 하며, 당첨 번호와 중복되지 않아야 합니다.',
});

const PRIZE_AMOUNTS = Object.freeze({
  FIRST_PRIZE: 2000000000,
  SECOND_PRIZE: 30000000,
  THIRD_PRIZE: 1500000,
  FOURTH_PRIZE: 50000,
  FIFTH_PRIZE: 5000,
});

export {
  LOTTO_TICKET_PRICE,
  USER_PROMPT_MESSAGES,
  CONFIRMATION_MESSAGES,
  ERROR_MESSAGES,
  PRIZE_AMOUNTS,
};
