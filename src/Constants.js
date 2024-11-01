export const GLOBAL_CONSTANTS = {
  bonusWinningStandard: 5,
  bonusTag: 'bonus',
  drawNumbers: 6,
};

export const LOTTO_MACHINE = {
  unitPice: 1000,
  minimumNumber: 1,
  maximumNumber: 45,
  drawNumbers: GLOBAL_CONSTANTS.drawNumbers,
};

export const ANALYZER = {
  bonusTag: GLOBAL_CONSTANTS.bonusTag,
  bonusWinningStandard: GLOBAL_CONSTANTS.bonusWinningStandard,
  maximumMatched: GLOBAL_CONSTANTS.drawNumbers,
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
  profitRatio: 100,
  profitDecimalPlace: 1,
};

export const INPUT_VIEW = {
  paymentQuestion: '구입금액을 입력해 주세요.',
};
