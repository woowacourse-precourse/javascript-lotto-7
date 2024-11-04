import { RULE } from './rule.js';

export const ERROR_MESSAGE = Object.freeze({
  invalidNumberType: '숫자를 입력해주세요.',
  invalidIntegerType: '정수를 입력해주세요.',
  invalidPurchaseAmountUnit: `로또 구입 금액은 ${RULE.purchaseAmount.unit}원 단위로 입력해주세요.`,
  exceedMaxPurchaseAmount: `로또 구입 금액은 ${RULE.purchaseAmount.max}원을 초과할 수 없습니다.`,
  invalidNumberInRange: `${RULE.lotto.minNumber}부터 ${RULE.lotto.maxNumber} 사이의 숫자를 입력해주세요.`,
  invalidNumberSize: `로또 번호는 ${RULE.lotto.lottoSize}개여야 합니다.`,
  invalidDuplicateNumber: '중복되지 않은 숫자를 입력해주세요.',
});
