export const PURCHASE_AMOUNT_ERROR = Object.freeze({
  NOT_NUMBER: '[ERROR] 구입 금액은 숫자여야 합니다.',
  NOT_POSITIVE: '[ERROR] 구입 금액은 양수여야 합니다.',
  NOT_DIVIDE_ONE_THOUSAND: '[ERROR] 구입 금액은 1000으로 나누어져야 합니다.',
});

export const LOTTO_NUMBER_ERROR = Object.freeze({
  NOT_NUMBER: '[ERROR] 로또 번호는 숫자여야 합니다',
  NOT_SIX_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  NOT_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  NOT_DUPLICATED: '[ERROR] 로또 번호는 중복된 숫자가 있으면 안됩니다.',
});

export const BONUS_NUMBER_ERROR = Object.freeze({
  NOT_NUMBER: '[ERROR] 보너스 번호는 숫자여야 합니다.',
  NOT_RANGE: '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
  NOT_DUPLICATED: '[ERROR] 보너스 번호는 로또 번호와 중복되면 안됩니다.',
});

export const NOT_INVALID_INPUT =
  '[ERROR] 잘못된 입력입니다. 다시 시도해 주세요.';
