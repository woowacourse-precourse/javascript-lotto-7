import { RULE } from './rule.js';

export const ERROR_MESSAGE = Object.freeze({
  invalidNumberType: '숫자를 입력해주세요.',
  invalidIntegerType: '정수를 입력해주세요.',
  invalidPurchaseAmountUnit: '로또 구입 금액은 1000원 단위로 입력해주세요.',
  invalidNumberInRange: '1부터 45 사이의 숫자를 입력해주세요.',
  invalidNumberSize: `로또 번호는 ${RULE.LOTTO.LOTTO_SIZE}개여야 합니다.`,
});
