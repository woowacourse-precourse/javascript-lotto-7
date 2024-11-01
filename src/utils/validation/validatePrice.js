import ERROR_MESSAGE from '../../constants/ErrorMessage.js';

const UNIT = 1000;

function validatePriceType(price) {
  if (Number.isNaN(price)) {
    throw new Error(ERROR_MESSAGE.INVALID_NOT_NUMBER);
  }
}

function validateUnitOfPrice(price) {
  const type = typeof price;
  if (type === 'number' && price % UNIT !== 0) {
    throw new Error(ERROR_MESSAGE.INVALID_LOTTO_PRICE);
  }
}

function validatePriceOverUnit(price) {
  const type = typeof price;
  if (type === 'number' && price < UNIT) {
    throw new Error(ERROR_MESSAGE.INVALID_PRICE);
  }
}

export default function validatePrice(price) {
  if (!price) {
    throw new Error(ERROR_MESSAGE.LOTTO_PRICE);
  }

  const parsedPrice = Number(price);
  validatePriceType(Number(parsedPrice));
  validatePriceOverUnit(Number(parsedPrice));
  validateUnitOfPrice(Number(parsedPrice));
}
