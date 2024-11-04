const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = {
  // PurchaseAmount
  INVALID_NUMBER: `${ERROR_PREFIX} 구매 금액은 숫자여야 합니다.`,
  MIN_AMOUNT: `${ERROR_PREFIX} 구매 금액은 1000원 이상이어야 합니다.`,
  DIVISIBLE_AMOUNT: `${ERROR_PREFIX} 구매 금액은 1000원 단위여야 합니다.`,

  // Lotto
  INVALID_LOTTO_NUMBER: `${ERROR_PREFIX} 로또 당첨 번호는 숫자여야 합니다.`,
  INVALID_LOTTO_COUNT: `${ERROR_PREFIX} 로또 당첨 번호는 6개여야 합니다.`,
  INVALID_LOTTO_RANGE: `${ERROR_PREFIX} 로또 당첨 번호는 1에서 45 사이의 숫자여야 합니다.`,
  DUPLICATED_LOTTO_NUMBER: `${ERROR_PREFIX} 로또 당첨 번호는 중복되지 않아야 합니다.`,

  // LottoBonus
  INVALID_LOTTO_BONUS_NUMBER: `${ERROR_PREFIX} 보너스 번호는 숫자여야 합니다.`,
  INVALID_LOTTO_BONUS_RANGE: `${ERROR_PREFIX} 보너스 번호는 1에서 45 사이의 숫자여야 합니다.`,
  DUPLICATED_LOTTO_BONUS_NUMBER: `${ERROR_PREFIX} 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.`,

};
