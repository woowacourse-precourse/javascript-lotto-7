const LOTTO_NUMBER_RANGE = Object.freeze({
  minimum: 1,
  maximum: 45,
  count: 6,
});

const LOTTO_EARNINGS = Object.freeze({
  3: 5000,
  4: 50000,
  5: 1500000,
  5: { bonus: 30000000 },
  6: 2000000000,
});

export { LOTTO_NUMBER_RANGE, LOTTO_EARNINGS };
