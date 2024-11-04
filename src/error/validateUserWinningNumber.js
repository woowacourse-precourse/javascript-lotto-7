import { LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_NUMBERS } from './constants.js';

export function validateUserWinningNumber(input) {

	// 입력 문자열의 공백을 제거
	const cleanedInput = input.replace(/\s+/g, "");

	if (!/^\d+(,\d+)*$/.test(cleanedInput)) {
		throw new Error("[ERROR] 숫자는 쉼표로만 구분 가능합니다.");
	}

	const numbers = cleanedInput.split(",").map(Number);

	if (numbers.length !== LOTTO_NUMBERS) {
		throw new Error(`[ERROR] 당첨번호는 ${LOTTO_NUMBERS}개를 입력하셔야 합니다.`);
	}

	if (numbers.some((num) => num < LOTTO_MIN_NUMBER || num > LOTTO_MAX_NUMBER)) {
		throw new Error(`[ERROR] 로또 번호는 ${LOTTO_MIN_NUMBER}부터 ${LOTTO_MAX_NUMBER} 사이의 숫자여야 합니다.`);
	}

	const uniqueNumbers = new Set(numbers);
	if (uniqueNumbers.size !== numbers.length) {
		throw new Error("[ERROR] 중복되는 숫자를 입력하실 수 없습니다.");
	}
}