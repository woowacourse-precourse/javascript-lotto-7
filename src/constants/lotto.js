const LOTTO_CONFIG = Object.freeze({
  PRICE_PER: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBERS_PER: 6,

  PRIZE: Object.freeze({
    3: 5000,
    4: 50000,
    5: 1500000,
    BONUS: 30000000,
    6: 2000000000,
  }),
});

export { LOTTO_CONFIG };
