const INPUT_TEXTS = Object.freeze({
  PURCHASE_AMOUNT : '구입 금액을 입력해 주세요.\n',
});

const ERROR_TEXTS = Object.freeze({
  NOT_A_NUMBER_PURCHASE_AMOUNT : '[ERROR] 구입 금액은 숫자만 입력해주세요.\n',
  NOT_A_BLANK_PURCHASE_AMOUNT : '[ERROR] 구입 금액은 공백으로 입력할 수 없습니다.\n',
  NOT_DIVIDE_1000_PURCHASE_AMOUNT : '[ERROR] 1000원 단위로 구입 금액을 입력해주세요.\n',
});

export { INPUT_TEXTS, ERROR_TEXTS };