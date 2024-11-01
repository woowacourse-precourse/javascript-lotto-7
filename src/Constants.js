const INPUT_TEXTS = Object.freeze({
  PURCHASE_AMOUNT : '구입 금액을 입력해 주세요.\n',
  WINNING_NUMBER : '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER : '\n보너스 번호를 입력해 주세요.\n',
});

const ERROR_TEXTS = Object.freeze({
  NOT_A_NUMBER_PURCHASE_AMOUNT : '[ERROR] 구입 금액은 숫자만 입력해 주세요.\n',
  NOT_A_BLANK_PURCHASE_AMOUNT : '[ERROR] 구입 금액은 공백으로 입력할 수 없습니다.\n',
  NOT_DIVIDE_1000_PURCHASE_AMOUNT : '[ERROR] 1000원 단위로 구입 금액을 입력해 주세요.\n',
  NOT_A_NUMBER_WINNING_NUMBER : '[ERROR] 당첨 번호는 숫자만 입력해 주세요.\n',
  NOT_A_BLANK_WINNING_NUMBER : '[ERROR] 당첨 번호는 공백으로 입력할 수 없습니다.\n',
  OUT_OF_COUNT_WINNING_NUMBER : '[ERROR] 당첨 번호는 6개만 입력해야 합니다.\n',
  OUT_OF_RANGE_WINNING_NUMBER : '[ERROR] 당첨 번호는 1 ~ 45 사이의 숫자로 입력해야 합니다.\n',
  NOT_A_FLOAT_WINNING_NUMBER : '[ERROR] 당첨 번호는 소수가 될 수 없습니다.\n',
  NOT_A_DUPLICATION_WINNING_NUMBER : '[ERROR] 당첨 번호는 중복될 수 없습니다.\n',
  NOT_A_NUMBER_BONUS_NUMBER : '[ERROR] 보너스 번호는 숫자만 입력해 주세요\n',
  NOT_A_BLANK_BONUS_NUMBER : '[ERROR] 보너스 번호는 공백으로 입력할 수 없습니다.\n',
  OUT_OF_RANGE_BONUS_NUMBER : '[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자로 입력해야 합니다.\n',
  NOT_A_FLOAT_BONUS_NUMBER : '[ERROR] 보너스 번호는 소수가 될 수 없습니다.\n',
});

export { INPUT_TEXTS, ERROR_TEXTS };