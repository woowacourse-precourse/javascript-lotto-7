export const REGEXP = Object.freeze({
  IS_NUMBER: /^[-+]?(\d+|Infinity)$/,
  ESCAPE: /[.*+?^${}()|[\]\\]/g,
});

export const PURCHASE_AMOUNT_RANGE = Object.freeze({
  min: 1000,
  max: 100000,
});

export const ERROR_MSG = Object.freeze({
  invalidInputData: '[ERROR] 입력 오류가 발생했습니다.',
  notANumber: '[ERROR] 문자가 입력되었습니다. 숫자만 입력해주세요!',
  outOfRange: `[ERROR] 입력 가능한 숫자 범위를 벗어납니다. ${PURCHASE_AMOUNT_RANGE.min}이상 ${PURCHASE_AMOUNT_RANGE.max}이하의 숫자로 입력해주세요!`,
  priceMisalign: '[ERROR] 구입 금액은 1000 단위로 입력해주세요.',
});
