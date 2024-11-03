import VALUES from './Values.js';

const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGES = Object.freeze({
  divideIntoUnit: `${ERROR_PREFIX}구매 금액은 ${VALUES.amountUnit}원 단위로 입력 가능합니다.`,
  integerGreaterThenZero: `${ERROR_PREFIX}구매 금액은 정수만 입력 가능합니다.`,
  duplicatedWinningNumber: `${ERROR_PREFIX}중복된 번호는 입력할 수 없습니다.`,
  invalidRangeNumber: `${ERROR_PREFIX}번호는 1에서 45사이의 정수만 입력 가능합니다.`,
  invalidWinningNumberLength: `${ERROR_PREFIX}번호는 ${VALUES.lottoLength}개만 입력 가능합니다.`,
  invalidBonusNumberLength: `${ERROR_PREFIX}보너스 번호는 ${VALUES.bonusNumberLength}개만 입력 가능합니다.`,
  duplicatedBonusNumber: `${ERROR_PREFIX}보너스 번호는 당첨 번호와 중복될 수 없습니다.`,
});
