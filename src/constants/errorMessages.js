const ERROR_PREFIX = '[ERROR]';

export const PURCHASE_AMOUNT_MESSAGES = {
  NOT_A_NUMBER: `${ERROR_PREFIX} 숫자만 입력이 가능합니다.`,
  NOT_THOUSAND_UNIT: `${ERROR_PREFIX} 1000원 단위로 입력해주셔야 됩니다.`,
  OVERFLOW: (maxValue) =>
    `${ERROR_PREFIX} ${maxValue}원 이하의 금액을 작성해주셔야 됩니다. `,
};

export const WINNING_NUMBERS_MESSAGES = {
  INVALID_FORMAT: `${ERROR_PREFIX} 쉼표(,)로 구분된 6개의 숫자만 입력이 가능합니다.`,
  INVALID_RANGE: `${ERROR_PREFIX} 로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
  DUPLICATE_NUMBERS: `${ERROR_PREFIX} 로또 번호에 중복된 숫자가 있습니다.`,
};

export const BONUS_NUMBER_MESSAGES = {
  NOT_A_NUMBER: `${ERROR_PREFIX} 보너스 번호는 숫자여야 합니다.`,
  INVALID_RANGE: `${ERROR_PREFIX} 보너스 번호는 1부터 45 사이의 숫자여야 합니다.`,
  DUPLICATE_WITH_WINNING: `${ERROR_PREFIX} 보너스 번호는 당첨 번호와 중복될 수 없습니다.`,
};
