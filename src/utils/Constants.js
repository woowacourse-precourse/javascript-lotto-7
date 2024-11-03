export const GLOBAL_CONSTANTS = {
  bonusWinningStandard: 5,
  bonusTag: 'bonus',
  basicTag: 'basic',
  drawNumbers: 6,
  unitPrice: 1000,
  minimumNumber: 1,
  maximumNumber: 45,
};

export const LOTTO_MACHINE = {
  unitPrice: GLOBAL_CONSTANTS.unitPrice,
  minimumNumber: GLOBAL_CONSTANTS.minimumNumber,
  maximumNumber: GLOBAL_CONSTANTS.maximumNumber,
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
  prize: {
    3: { [GLOBAL_CONSTANTS.basicTag]: 5000 },
    4: { [GLOBAL_CONSTANTS.basicTag]: 50000 },
    5: {
      [GLOBAL_CONSTANTS.basicTag]: 1500000,
      [GLOBAL_CONSTANTS.bonusTag]: 30000000,
    },
    6: { [GLOBAL_CONSTANTS.basicTag]: 2000000000 },
  },
  basicTag: GLOBAL_CONSTANTS.basicTag,
  defaultPrize: 0,
  profitRatio: 100,
  profitDecimalPlace: 1,
};

export const INPUT_VIEW = {
  paymentQuestion: '구입금액을 입력해 주세요.',
  winningNumbersQuestion: '당첨 번호를 입력해 주세요.',
  bonusNumberQuestion: '보너스 번호를 입력해 주세요.',
};

export const OUTPUT_VIEW = {
  purchaseAmount: (amount) => `${amount}개를 구매했습니다.`,
  statisticsHeader: '당첨 통계',
  separatingMark: '---',
  winningStatistics: (numbersOfMatched, matchingCount, prize) =>
    `${numbersOfMatched}개 일치 (${prize}원) - ${matchingCount}개`,
  bonusStatistics: (numbersOfMatched, matchingCount, prize) =>
    `${numbersOfMatched}개 일치, 보너스 볼 일치 (${prize}원) - ${matchingCount}개`,
  profit: (profit) => `총 수익률은 ${profit}%입니다.`,
  numberSeparator: ', ',
};

export const VALIDATION = {
  mustOverage: 0,
  unitPrice: GLOBAL_CONSTANTS.unitPrice,
  minimumNumber: GLOBAL_CONSTANTS.minimumNumber,
  maximumNumber: GLOBAL_CONSTANTS.maximumNumber,
  drawNumbers: GLOBAL_CONSTANTS.drawNumbers,
};

export const UTILS = {
  separator: ',',
};

export const ERROR_MESSAGE = {
  notNumber: '[ERROR] 숫자만 입력 가능합니다.',
  notPositiveNumber: '[ERROR] 구입 금액은 양수만 가능합니다.',
  notInRangeNumber: `[ERROR] 당첨 번호와 보너스 번호는 ${VALIDATION.minimumNumber} 이상 ${VALIDATION.maximumNumber} 이하의 숫자만 가능합니다.`,
  notInteger: '[ERROR] 당첨 번호와 보너스 번호는 정수만 가능합니다.',
  isDuplicated:
    '[ERROR] 각 당첨 번호와 보너스 번호들은 서로 중복될 수 없습니다.',
  notValidNumberCount: `[ERROR] 번호는 ${VALIDATION.drawNumbers}개로 입력해주세요.`,
};
