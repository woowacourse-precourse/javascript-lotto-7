const SEPERATOR = ',';

const LOTTO = Object.freeze({
  UNIT_PRICE: 1000,
  MINIMUM_NUMBER: 1,
  MAXIMUM_NUMBER: 45,
  NUMBER_OF_SPACE: 6,
});

const REGEX = Object.freeze({
  WINNING_NUMBER: /^[0-9,]+$/,
  NUMBER: /^[0-9]+$/,
});

const ERROR = Object.freeze({
  EMPTY_PURCHASE_AMOUNT_MEESSAGE: '[ERROR] 구입 금액이 입력되지 않았습니다.',
  NONE_INTEGER_PURCHASE_AMOUNT_MESSAGE:
    '[ERROR] 구입 금액은 정수 형태여야 합니다.',
  MINIMUM_PURCHASE_AMOUNT_MESSAGE:
    '[ERROR] 구입 금액은 1,000원 이상이어야 합니다.',
  UNIT_PRICE_MESSAGE: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  INVALID_CHARACTER_MESSAGE:
    '[ERROR] 숫자와 구분자를 제외한 문자가 포함되어있습니다.',
  INVALID_LOTTO_SPACE_MESSAGE:
    '[ERROR] 당첨 번호는 6개의 숫자로 이루어져야 합니다.',
  DUPLICATED_NUMBER_MESSAGE: '[ERROR] 당첨 번호에 중복된 숫자가 있습니다.',
  INVALID_LOTTO_NUMBER_MESSAGE:
    '[ERROR] 당첨 번호가 1과 45 사이에 존재하지 않습니다.',
  EMPTY_BONUS_NUMBER_MESSAGE: '[ERROR] 보너스  입력되지 않았습니다.',
  NONE_INTEGER_BONUS_NUMBER_MESSAGE:
    '[ERROR] 보너스 번호는 정수 형태여야 합니다.',
  INVALID_BONUS_NUMBER_MESSAGE:
    '[ERROR] 보너스 번호가 1과 45 사이에 존재하지 않습니다.',
    DUPLICATED_BOCUS_NUMBER_MESSAGE :
    '[ERROR] 보너스 번호에 중복된 숫자가 있습니다.',
});

export { LOTTO, SEPERATOR, REGEX, ERROR };
