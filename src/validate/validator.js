import { LOTTO_ERROR_MESSAGE } from '../constants/constants.js';

export function validateRangeOfLottoPrice(price) {
  if (price < 0) {
    throw new Error(LOTTO_ERROR_MESSAGE.UNDER_PRICE_ERROR_MESSAGE);
  }
}

export function validateNumberTypeLottoPrice(price) {
  const lottoPrice = Number.parseInt(price, 10);
  if (lottoPrice % 1000 !== 0) {
    throw new Error(LOTTO_ERROR_MESSAGE.UNIT_PRICE_ERROR_MESSAGE);
  }
}

export function validateAmountOfLotto(amount) {
  if (Number.isNaN(amount)) {
    throw new Error(LOTTO_ERROR_MESSAGE.NOT_NUMBER_ERROR_MESSAGE);
  }
}
