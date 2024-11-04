import { LOTTO_QUOTIENT } from './constants.js';

export function validatePurchaseAmount(amount) {
	if (amount === "") {
		throw new Error("[ERROR] 값을 입력해주세요.");
	}
	if (isNaN(amount)) {
		throw new Error("[ERROR] 숫자만 입력 가능합니다.");
	}
	if (amount % LOTTO_QUOTIENT !== 0) {
		throw new Error(`[ERROR] ${LOTTO_QUOTIENT}원으로 나눠떨어져야 합니다.`);
	}
	if (amount < LOTTO_QUOTIENT) {
		throw new Error(`[ERROR] 구입 금액은 ${LOTTO_QUOTIENT}원 이상이어야 합니다.`);
	}
}