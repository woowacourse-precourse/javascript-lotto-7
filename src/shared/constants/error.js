const ERROR_MESSAGE_HEADER = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  INVALID_LENGTH: `${ERROR_MESSAGE_HEADER} 로또 번호는 6개여야 합니다.`,
  INVALID_RANGE: `${ERROR_MESSAGE_HEADER} 로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
  INVALID_DUPLICATE: `${ERROR_MESSAGE_HEADER} 로또 번호는 중복되지 않아야 합니다.`,
  INVALID_AMOUNT: `${ERROR_MESSAGE_HEADER} 구입 금액은 1,000원 단위여야 합니다.`,
  INVALID_BIGGER_THAN_ZERO: `${ERROR_MESSAGE_HEADER} 구입 금액은 0보다 큰 양수여야 합니다`,
  INVALID_EMPTY_INPUT: `${ERROR_MESSAGE_HEADER} 구입 금액은 공백이면 안됩니다.`,
  INVALID_MONEY_INPUT: `${ERROR_MESSAGE_HEADER} 구입 금액은 숫자여야 합니다.`,
  INVALID_WINNING_NUMBERS: `${ERROR_MESSAGE_HEADER} 당첨 번호가 잘못되었습니다.`,
  INVALID_BONUS: `${ERROR_MESSAGE_HEADER} 보너스 번호가 잘못되었습니다.`,
});
