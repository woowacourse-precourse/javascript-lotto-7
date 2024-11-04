export const RANK_NAME = Object.freeze({
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  FIVE_BONUS: '5+',
  SIX: 6,
});

export const RANK_PRICE = Object.freeze({
  [RANK_NAME.THREE]: 5000,
  [RANK_NAME.FOUR]: 50000,
  [RANK_NAME.FIVE]: 1500000,
  [RANK_NAME.FIVE_BONUS]: 30000000,
  [RANK_NAME.SIX]: 2000000000,
});

export const NUMBER_RANGE = Object.freeze({
  MIN: 1,
  MAX: 45,
});

export const PRICE_RANGE = Object.freeze({
  MIN: 1000,
  MAX: 1000000,
});

export const LOTTO_NUMBER_LENGTH = 6;

export const SEPARATOR = ',';
