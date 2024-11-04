import { LOTTO_PRICE } from "./lotto.js";

const ERROR_PREFIX = "[ERROR]";

export const ERROR_MESSAGE = Object.freeze({
  INVALID_PURCHASE_AMOUNT: `${ERROR_PREFIX} 구입 금액은 로또 한 장 가격인 ${LOTTO_PRICE}원 단위여야 합니다.`,
  INVALID_NUMBERS_LENGTH: `${ERROR_PREFIX} 로또 번호는 6개여야 합니다.`,
  INVALID_NUMBERS_RANGE: `${ERROR_PREFIX} 로또 번호는 1부터 45 사이여야 합니다.`,
  NOT_NUMBER: `${ERROR_PREFIX} 숫자가 아닌 값이 포함되어 있습니다.`,
});