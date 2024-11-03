const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = {
  INVALID_NUMBER: `${ERROR_PREFIX} 구매 금액은 숫자여야 합니다.`,
  MIN_AMOUNT: `${ERROR_PREFIX} 구매 금액은 1000원 이상이어야 합니다.`,
  DIVISIBLE_AMOUNT: `${ERROR_PREFIX} 구매 금액은 1000원 단위여야 합니다.`,
  INVALID_LOTTO_NUMBER: `${ERROR_PREFIX} 로또 번호는 6개여야 합니다.`,
};
