import {
  LOTTO_ERROR_MESSAGE,
  LOTTO_PRICE,
  MAX_NUMBER,
  MIN_NUMBER,
  NUMBER_OF_LOTTO_NUMBERS,
} from '../constants/constants.js';

export function validateRangeOfLottoPrice(price) {
  if (price < 0) {
    throw new Error(LOTTO_ERROR_MESSAGE.UNDER_PRICE_ERROR_MESSAGE);
  }
}

export function validateNumberTypeLottoPrice(price) {
  const lottoPrice = Number.parseInt(price, 10);
  if (lottoPrice % LOTTO_PRICE !== 0) {
    throw new Error(LOTTO_ERROR_MESSAGE.UNIT_PRICE_ERROR_MESSAGE);
  }
}

export function validateAmountOfLotto(amount) {
  if (Number.isNaN(amount)) {
    throw new Error(LOTTO_ERROR_MESSAGE.NOT_NUMBER_ERROR_MESSAGE);
  }
}

export function validateDuplicateLottoNumber(lottoNumbers) {
  const lottoNumberSet = new Set(lottoNumbers);
  if (lottoNumberSet.size !== lottoNumbers.length) {
    throw new Error(LOTTO_ERROR_MESSAGE.DUPLICATE_NUMBER_ERROR_MESSAGE);
  }
}

export function validateLottoNumberRange(lottoNumbers) {
  lottoNumbers.forEach((lottoNumber) => {
    if (lottoNumber < MIN_NUMBER || lottoNumber > MAX_NUMBER) {
      throw new Error(LOTTO_ERROR_MESSAGE.OUT_OF_RANGE_NUMBER_ERROR_MESSAGE);
    }
  });
}

export function validateNumberOfLottoNumbers(lottoNumbers) {
  if (lottoNumbers.length !== NUMBER_OF_LOTTO_NUMBERS) {
    throw new Error(LOTTO_ERROR_MESSAGE.NUMBER_OF_LOTTO_NUMBERS_ERROR_MESSAGE);
  }
}
