export const LOTTO = {
  MAX_NUMBER: 45,
  MIN_NUMBER: 1,
  NUMBER_COUNT: 6,
  PRICE: 1000,
};

export const PRIZE = Object.freeze({
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
});

export const INITIAL_RANK = Object.freeze({
  first: 0,
  second: 0,
  third: 0,
  fourth: 0,
  fifth: 0,
});

export const PRIZE_KEYS = Object.freeze({
  '6-true': 'first',
  '6-false': 'first',
  '5-true': 'second',
  '5-false': 'third',
  '4-true': 'fourth',
  '4-false': 'fourth',
  '3-true': 'fifth',
  '3-false': 'fifth',
});
