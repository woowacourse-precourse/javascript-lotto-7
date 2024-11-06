import {
  PRICE_ERROR_MESSAGE,
  NUMBER_INPUT_ERROR_MESSAGE,
} from "../Constants.js";
export const MIN_PRICE = 1000;

export function isNumber() {
  // 보너스 번호 검사도 trim()사용해서 여기서 함
  if (!/^[0-9]+$/.test(price)) {
    throw new Error(NUMBER_INPUT_ERROR_MESSAGE.IS_NUMBER);
  }
}

export function isUnitOfPrice() {
  if (!(price % MIN_PRICE === 0)) {
    throw new Error(PRICE_ERROR_MESSAGE.PRICE_INCORRECT);
  }
}

export function minPrice() {
  if (price < MIN_PRICE) {
    throw new Error(PRICE_ERROR_MESSAGE.MIN_PRICE_MESSAGE);
  }
}

export function maxPrice() {
  const MAX_PRICE = 100000;
  if (MAX_PRICE < price) {
    throw new Error(PRICE_ERROR_MESSAGE.MAX_PRICE_MESSAGE);
  }
}
