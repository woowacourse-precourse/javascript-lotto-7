const ERROR_PREFIX = Object.freeze('[ERROR]');

const PURCHASE_ERROR_MESSAGE = Object.freeze({
  NO_INPUT: '구매 금액을 입력해주세요.',
  NOT_THOUSAND_UNIT: '구매 금액은 1,000원 단위로 입력해야 합니다.',
  NOT_NUMBER: '구매 금액은 숫자로 입력해야 합니다.',
  LESS_THAN_ZERO: '구매 금액은 0원 이하일 수 없습니다.',
  ZERO_AMOUNT: '구매 금액은 0원입니다.',
});

const WINNING_NUMBER_ERROR_MESSAGE = Object.freeze({
  NO_INPUT: '당첨 번호를 입력해주세요.',
  OUT_OF_RANGE: '당첨 번호는 1~45 범위의 숫자로 입력해야 합니다.',
  NOT_NUMBER: '당첨 번호는 숫자로 입력해야 합니다.',
  DUPLICATE: '당첨 번호는 중복되지 않아야 합니다.',
  INVALID_LENGTH: '당첨 번호는 숫자 6개를 입력해야 합니다.',
});

export { ERROR_PREFIX, PURCHASE_ERROR_MESSAGE, WINNING_NUMBER_ERROR_MESSAGE };
