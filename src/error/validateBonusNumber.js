import { LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_NUMBERS } from './constants.js';

export function validateBonusNumber(bonus, winningNumbers) {
	if (isNaN(bonus)) {
		throw new Error("[ERROR] 숫자만 입력해주세요.");
	}

	const bonusNumber = Number(bonus);
	if (bonusNumber < LOTTO_MIN_NUMBER || bonusNumber > LOTTO_MAX_NUMBER) {
		throw new Error(`[ERROR] 로또 번호는 ${LOTTO_MIN_NUMBER}부터 ${LOTTO_MAX_NUMBER} 사이의 숫자여야 합니다.`);
	}

	if (winningNumbers.includes(bonusNumber)) {
		throw new Error(`[ERROR] 보너스 숫자는 당첨번호 ${LOTTO_NUMBERS}자리 숫자와 중복될 수 없습니다.`);
	}
}