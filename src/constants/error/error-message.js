const ERROR_HEADER = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  ERROR_HEADER,

  NOT_SIX_NUMBERS: `${ERROR_HEADER} 로또 번호는 6개여야 합니다.`,
  DUPLICATED_NUMBER: `${ERROR_HEADER} 로또 번호는 중복되지 않아야 합니다.`,
  OUT_OF_RANGE: `${ERROR_HEADER} 로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
  INVALID_NUMBER: `${ERROR_HEADER} 로또 번호는 숫자여야 합니다.`,
  INVALID_PURCHASE_AMOUNT: `${ERROR_HEADER} 로또 구매 금액은 숫자여야 합니다.`,
  INVALID_PURCHASE_AMOUNT_RANGE: `${ERROR_HEADER} 로또 구매 금액은 1000원 이상이어야 합니다.`,
  INVALID_WINNING_NUMBER: `${ERROR_HEADER} 당첨 번호는 숫자여야 합니다.`,
  INVALID_BONUS_NUMBER: `${ERROR_HEADER} 보너스 번호는 숫자여야 합니다.`,
  INVALID_WINNING_NUMBER_RANGE: `${ERROR_HEADER} 당첨 번호는 1부터 45 사이의 숫자여야 합니다.`,
});
