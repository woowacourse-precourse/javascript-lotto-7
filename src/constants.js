export const MESSAGE = {
  // 출력 메시지
  ERROR: "[ERROR]",
};

export const ERROR_MESSAGE = {
  NOT_NUMBER: `${MESSAGE.ERROR} 로또 번호가 숫자가 아닙니다.`,
  DUPLICATE_NUMBER: `${MESSAGE.ERROR} 로또 번호가 중복되었습니다.`,
  OVER_LENGTH_NUMBER: `${MESSAGE.ERROR} 로또 번호는 6개여야 합니다.`,
  OVER_NUMBER: `${MESSAGE.ERROR} 로또 번호는 1~45 사이여야 합니다.`,

  UNDER_PRICE: `${MESSAGE.ERROR} 입력 금액이 1000원 미만입니다`,
  NOT_PRICE: `${MESSAGE.ERROR} 입력 금액이 1000원 단위가 아닙니다`,
  NOT_NUMBER_PRICE: `${MESSAGE.ERROR} 입력 금액이 숫자가 아닙니다`,

  DUPLICATE_WINNING_NUMBER: `${MESSAGE.ERROR} 당첨 번호가 중복되었습니다.`,
  NOT_WINNING_NUMBER_RANGE: `${MESSAGE.ERROR} 당첨 번호는 1~45 사이여야 합니다.`,
  OVER_LENGTH_WINNING_NUMBER: `${MESSAGE.ERROR} 당첨 번호는 6개여야 합니다.`,

  NOT_BONUS_NUMBER_RANGE: `${MESSAGE.ERROR} 보너스 번호는 1~45 사이여야 합니다.`,
  DUPLICATE_BONUS_NUMBER: `${MESSAGE.ERROR} 보너스 번호가 당첨 번호와 중복됩니다.`,
};
