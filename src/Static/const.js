export const MIN_RANGE = 1;
export const MAX_RANGE = 45;
export const LOTTO_NUMBERS_COUNT = 6;

export const lottoInfo = {
  first: {
    match: LOTTO_NUMBERS_COUNT,
    hasBonusBall: false,
    prize: 2_000_000_000,
  },
  second: {
    match: LOTTO_NUMBERS_COUNT - 1,
    hasBonusBall: true,
    prize: 30_000_000,
  },
  third: {
    match: LOTTO_NUMBERS_COUNT - 1,
    hasBonusBall: false,
    prize: 1_500_000,
  },
  fourth: {
    match: LOTTO_NUMBERS_COUNT - 2,
    hasBonusBall: false,
    prize: 50_000,
  },
  fifth: {
    match: LOTTO_NUMBERS_COUNT - 3,
    hasBonusBall: false,
    prize: 5_000,
  },
};
