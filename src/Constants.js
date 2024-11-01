export const GLOBAL_CONSTANTS = {
  bonusWinningStandard: 5,
  bonusTag: 'bonus',
};

export const LOTTO_MACHINE = {
  unitPice: 1000,
  minimumNumber: 1,
  maximumNumber: 45,
  drawNumbers: 6,
};

export const ANALYZER = {
  bonusTag: GLOBAL_CONSTANTS.bonusTag,
  bonusWinningStandard: GLOBAL_CONSTANTS.bonusWinningStandard,
  defaultCount: 0,
  unitCount: 1,
};

export const PRIZE_CALCULATOR = {
  amount: {
    3: 5000,
    4: 50000,
    5: 1500000,
    [GLOBAL_CONSTANTS.bonusTag]: 30000000,
    6: 2000000000,
  },

  defaultPrize: 0,
};
