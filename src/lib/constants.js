export const LOTTO_PRICE = 1000;

export const LOTTO_NUM_LENGTH = 6;

export const RANDOM_RANGE = Object.freeze({
  min: 1,
  max: 45,
});

export const PRICE_RANGE = Object.freeze({
  min: LOTTO_PRICE,
  max: LOTTO_PRICE * 100,
});

export const PRIZE_MONEY = Object.freeze({
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
});

export const RANK_MESSAGES = [
  { matchCount: 3, rank: "5" },
  { matchCount: 4, rank: "4" },
  { matchCount: 5, rank: "3" },
  { matchCount: 5, rank: "2", matchBonus: true },
  { matchCount: 6, rank: "1" },
];
