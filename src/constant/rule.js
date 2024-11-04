export const RULE = Object.freeze({
  purchaseAmount: {
    unit: 1000,
    max: 2000000000,
  },
  lotto: {
    minNumber: 1,
    maxNumber: 45,
    lottoSize: 6,
    bonusSize: 1,
    rankRules: {
      6: 1,
      5: { true: 2, false: 3 },
      4: 4,
      3: 5,
    },
    prizeAmounts: {
      0: 0,
      1: 2000000000,
      2: 30000000,
      3: 1500000,
      4: 50000,
      5: 5000,
    },
  },
});
