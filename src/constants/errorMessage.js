const ERROR_PREFIX = Object.freeze('[ERROR]');

const PURCHASE_ERROR_MESSAGE = Object.freeze({
  NO_INPUT: '구매 금액을 입력해주세요.',
  NOT_THOUSAND_UNIT: '구매 금액은 1,000원 단위로 입력해야 합니다.',
  NOT_NUMBER: '구매 금액은 숫자로 입력해야 합니다.',
  LESS_THAN_ZERO: '구매 금액은 0원 이하일 수 없습니다.',
  ZERO_AMOUNT: '구매 금액은 0원입니다.',
});

export { ERROR_PREFIX, PURCHASE_ERROR_MESSAGE, WINNING_NUMBER_ERROR_MESSAGE };
