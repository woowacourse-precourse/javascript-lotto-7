export const PRINT_MESSAGE = {
  INPUT_PAYMENT: '구입금액을 입력해 주세요.\n',
  BUY_COUNT: '개를 구매했습니다.',
  INPUT_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
};

export const ERROR_MESSAGE = {
  INPUT_EMPTY: '값을 입력해주세요.',
  NOT_NUMBER: '숫자만 입력가능합니다.',
  NOT_POSITIVE_INTEGER: '양의 정수만 입력가능합니다.',
  INVAILD_UNIT: '로또 구입 금액 단위는 1000원 단위만 가능합니다.',
  OVER_MAXIMUM: '10만원까지 구매할 수 있습니다.',
  NUMBERS_LENGHT_SIX: '[ERROR] 로또 번호는 6개여야 합니다.',
  SAME_NUMBER: '[ERROR] 로또 번호는 서로 다른 번호여야 합니다.',
  INVAILD_WINNING_NUMBERS: '숫자와 쉼표(,)를 이용하여 당첨번호를 입력해주세요.',
  WINNING_NUMBERS_OUT_OF_RANGE: '1~45 사이의 숫자를 입력해주세요.',
};

export const WINNING_NUMBERS_REGEX = /^[0-9]+(,[0-9]+)*$/;
