export const REGEXP = Object.freeze({
  IS_NUMBER: /^[-+]?(\d+|Infinity)$/,
  ESCAPE: /[.*+?^${}()|[\]\\]/g,
});

export const LOTTO_PRICE = 1000;
export const LOTTO_NUMBER_COUNT = 6;
export const LOTTO_BONUS_NUMBER_COUNT = 1;

export const PURCHASE_AMOUNT_RANGE = Object.freeze({
  min: 1000,
  max: 100000,
});

export const LOTTO_NUMBER_RANGE = Object.freeze({
  min: 1,
  max: 45,
});

export const ERROR_MSG = Object.freeze({
  invalidInputData: '[ERROR] 입력 오류가 발생했습니다.',
  notANumber: '[ERROR] 문자가 입력되었습니다. 숫자만 입력해주세요!',
  outOfAmountRange: `[ERROR] 입력 가능한 숫자 범위를 벗어납니다. ${PURCHASE_AMOUNT_RANGE.min}이상 ${PURCHASE_AMOUNT_RANGE.max}이하의 숫자로 입력해주세요!`,
  priceMisalign: `[ERROR] 구입 금액은 ${LOTTO_PRICE} 단위로 입력해주세요.`,

  outOfLottoRange: `[ERROR] 입력 가능한 숫자 범위를 벗어납니다. ${LOTTO_NUMBER_RANGE.min}이상 ${LOTTO_NUMBER_RANGE.max}이하의 숫자로 입력해주세요!`,
  invalidNumberCount: `[ERROR] 당첨 번호는 ${LOTTO_NUMBER_COUNT}개가 지정되어야 합니다.`,
  duplicateNumber: `[ERROR] 번호가 중복됩니다. 중복이 되지 않게 입력해주세요!`,

  invalidBonusNumberCount: `[ERROR] 보너스 번호는 ${LOTTO_BONUS_NUMBER_COUNT}개가 지정되어야 합니다.`,
});
