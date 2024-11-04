export const COMMON_ERROR_MESSAGES = Object.freeze({
  NOT_A_NATURAL_NUMBER: '[ERROR] 해당 값은 자연수여야 합니다.',
  WHITESPACE_NOT_ALLOWED:
    '[ERROR] 공백은 입력할 수 없습니다. 공백을 제거하고 다시 입력해 주세요.',
  EMPTY_STRING: '[ERROR] 입력 값이 비어 있습니다. 값을 입력해 주세요.'
});

export const PURCHASE_ERROR_MESSAGES = Object.freeze({
  PURCHASE_AMOUNT_MUST_BE_MULTIPLE_OF_1000:
    '[ERROR] 유효하지 않은 금액입니다. 구입 금액은 1,000원 단위로 입력해 주세요.'
});

export const LOTTO_NUMBER_ERROR_MESSAGES = Object.freeze({
  LOTTO_NUMBER_COUNT_MUST_BE_SIX:
    '[ERROR] 유효하지 않은 입력입니다. 로또 번호는 6개여야 합니다.',
  LOTTO_NUMBER_OUT_OF_RANGE:
    '[ERROR] 유효하지 않은 로또 번호입니다. 1부터 45 사이의 숫자를 입력해 주세요.',
  LOTTO_DUPLICATE_NUMBERS_FOUND:
    '[ERROR] 중복된 숫자가 있습니다. 중복 없이 입력해 주세요.'
});
