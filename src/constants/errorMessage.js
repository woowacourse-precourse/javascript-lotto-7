const ERROR_TAG = "[ERROR]";
const ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: `${ERROR_TAG} 입력된 값이 없습니다. 값을 다시 입력해 주세요.`,
  PURCHASE_INVALID: `${ERROR_TAG} 유효하지 않은 값입니다. 숫자를 입력해 주세요.`,
  PURCHASE_POSITIVE: `${ERROR_TAG} 구입 금액은 양수여야 합니다.`,
  PURCHASE_MULTIPLE_OF_THOUSAND: `${ERROR_TAG} 구입 금액은 1000원 단위로만 입력해 주세요.`,

  WINNING_PURCHASE_INVALID: `${ERROR_TAG} 당첨 번호는 숫자로 구성되어야 합니다.`,
  WINNING_NUMBER_COUNT: `${ERROR_TAG} 당첨 번호는 총 6개로 이루어져야 합니다.`,
  WINNING_NUMBER_FORMAT: `${ERROR_TAG} 당첨 번호는 1-45 사이의 숫자로 입력해야 합니다.`,
  WINNING_NUMBER_DUPLICATE: `${ERROR_TAG} 당첨 번호는 서로 중복되지 않아야 합니다.`,

  BONUS_NUMBER_FORMAT: `${ERROR_TAG} 보너스 번호는 1-45 사이의 숫자로 입력해야 합니다.`,
  BONUS_NOT_IN_WINNING_NUMBERS: `${ERROR_TAG} 보너스 번호는 당첨 번호에 포함되어 있지 않은 수여야 합니다.`,
});

export { ERROR_MESSAGE };
