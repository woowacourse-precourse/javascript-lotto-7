export const LOTTO = Object.freeze({
  ticketPrice: 1000,
  minNumber: 1,
  maxNumber: 45,
  numberCount: 6,
  isInvalidRange: (number) =>
    Number(number) < LOTTO.minNumber || Number(number) > LOTTO.maxNumber,
});

export const MATCHING_COUNT = Object.freeze({
  first: 6,
  second: 5,
  third: 5,
  fourth: 4,
  fifth: 3,
});

export const PRIZE = Object.freeze({
  first: 2_000_000_000,
  second: 30_000_000,
  third: 1_500_000,
  fourth: 50_000,
  fifth: 5_000,
});
