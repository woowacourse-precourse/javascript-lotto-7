const ERROR_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT_EMPTY : '[ERROR] 구매 금액을 입력해주세요.',
  PURCHASE_AMOUNT_NAN : '[ERROR] 로또는 숫자로 살 수 있습니다.(예시 100000)',
  PURCHASE_AMOUNT_NOT_DIVIDE_1000 : '[ERROR] 로또는 1000원 단위로 구매 할 수 있습니다.',
  PURCHASE_AMOUNT_NOT_INTEGER : '[ERROR] 로또는 정수값으로 입력할 수 있습니다.',
  PURCHASE_AMOUNT_TOO_LARGE : '[ERROR] 구매 금액이 너무 큽니다.',
  PURCHASE_AMOUNT_TOO_SMALL : '[ERROR] 구매 금액은 최소 1000원 이어야합니다.',
  PURCHASE_AMOUNT_NEGATIVE: '[ERROR] 로또 구입 금액은 음수일 수 없습니다.'
});

export default ERROR_MESSAGE;