export const ERROR_PREFIX = '[ERROR]';

export const LOTTO_NUMBER_LENGTH = 6;

export const LOTTO_NUMBER_RANGE = [1, 45];

export const LOTTO_PRICE = 1_000;

export const PURCHASE_LIMIT_AMOUNT = 100_000;

export const LOTTO_PRIZE_LIST = Object.freeze([
  Object.freeze({ count: 6, bonus: false, cash: 2_000_000_000 }),
  Object.freeze({ count: 5, bonus: true, cash: 30_000_000 }),
  Object.freeze({ count: 5, bonus: false, cash: 1_500_000 }),
  Object.freeze({ count: 4, bonus: false, cash: 50_000 }),
  Object.freeze({ count: 3, bonus: false, cash: 5_000 }),
]);
