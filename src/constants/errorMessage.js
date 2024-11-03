import { LOTTO_PRICE } from "./lotto.js";

const ERROR_PREFIX = "[ERROR]";

export const ERROR_MESSAGE = Object.freeze({
  INVALID_PURCHASE_AMOUNT: `${ERROR_PREFIX} 구입 금액은 로또 한 장 가격인 ${LOTTO_PRICE}원 단위여야 합니다.`,
});