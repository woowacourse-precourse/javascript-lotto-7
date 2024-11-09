export const VALUES = Object.freeze({
  amountUnit: 1_000,
  lottoLength: 6,
  bonusNumberLength: 1,
  lottoMinNumber: 1,
  lottoMaxNumber: 45,
  matchBonusCount: 5,
  prizeLeastCount: 3,
});

export const CHARS = Object.freeze({
  inputNumbersDelimiter: ',',
  printingNumberDelimiter: ', ',
  lottoNumbersStartWith: '[',
  lottoNumbersEndWith: ']',
});

export const MATCH_COUNT = Object.freeze({
  6: 'first',
  5: {
    1: 'second',
    0: 'third',
  },
  4: 'fourth',
  3: 'fifth',
});

export const PRIZE_AMOUNT = Object.freeze({
  first: 2_000_000_000,
  second: 30_000_000,
  third: 1_500_000,
  fourth: 50_000,
  fifth: 5_000,
});
