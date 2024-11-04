const PRICE_PER_LOTTO = Object.freeze(1_000);

const PRICE_MAX_AMOUNT = Object.freeze(100_000_000);

const LOTTO_CONDITION = Object.freeze({
  startRange: 1,
  endRange: 45,
  length: 6,
});

const RANK = Object.freeze({
  first: 6,
  second: 5,
  third: 5,
  fourth: 4,
  fifth: 3,
});

const PRIZE_KEY = Object.freeze({
  first_prize: 'first_prize',
  second_prize: 'second_prize',
  third_prize: 'third_prize',
  fourth_prize: 'fourth_prize',
  fifth_prize: 'fifth_prize',
});

const PRIZE_AMOUNT = Object.freeze({
  [PRIZE_KEY.fifth_prize]: 5_000,
  [PRIZE_KEY.fourth_prize]: 50_000,
  [PRIZE_KEY.third_prize]: 1_500_000,
  [PRIZE_KEY.second_prize]: 30_000_000,
  [PRIZE_KEY.first_prize]: 2_000_000_000,
});

const INITIAL_STATISTICS = Object.freeze({
  [PRIZE_KEY.fifth_prize]: 0,
  [PRIZE_KEY.fourth_prize]: 0,
  [PRIZE_KEY.third_prize]: 0,
  [PRIZE_KEY.second_prize]: 0,
  [PRIZE_KEY.first_prize]: 0,
});

export {
  LOTTO_CONDITION,
  PRICE_PER_LOTTO,
  PRICE_MAX_AMOUNT,
  RANK,
  PRIZE_KEY,
  PRIZE_AMOUNT,
  INITIAL_STATISTICS,
};
