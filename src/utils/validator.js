import { ERROR_MESSAGE } from '../constants/messages.js';
import {
	LOTTO_COUNT,
	MAX_LOTTO_NUMBER,
	MIN_LOTTO_NUMBER,
} from '../constants/numbers.js';
import { formattedError } from './error.js';

export class Validator {
	isValidCost(str) {
		this.#generalValidation(str);
		const strToNumber = Number(str);

		if (this.#isNaN(str)) {
			formattedError(ERROR_MESSAGE.NOT_A_NUMBER);
		}

		if (this.#isNegative(strToNumber)) {
			formattedError(ERROR_MESSAGE.IS_NEGATIVE);
		}

		if (!this.#isDividedByThousand(strToNumber)) {
			formattedError(ERROR_MESSAGE.NOT_DIVIDED_BY_THOUSAND);
		}

		return true;
	}

	isValidWinningNumber(str) {
		this.#generalValidation(str);

		if (this.#isNotNumberOrComma(str)) {
			formattedError(ERROR_MESSAGE.INVALID_WINNING_FORMAT);
		}

		const winningNumberArray = str.split(',').map((n) => Number(n));

		if (!this.#isMatchLottoCount(winningNumberArray)) {
			formattedError(ERROR_MESSAGE.INVALID_LOTTO_COUNT);
		}

		if (this.#isDuplicated(winningNumberArray)) {
			formattedError(ERROR_MESSAGE.IS_DUPLICATED);
		}

		if (this.#isOverRangeNumbers(winningNumberArray)) {
			formattedError(ERROR_MESSAGE.IS_OVER_NUMBER_RANGE);
		}

		return true;
	}

	isValidBonusNumber(str) {
		this.#generalValidation(str);
		const strToNumber = Number(str);

		if (this.#isNaN(str)) {
			formattedError(ERROR_MESSAGE.NOT_A_NUMBER);
		}

		if (this.#isNegative(strToNumber)) {
			formattedError(ERROR_MESSAGE.IS_NEGATIVE);
		}

		if (this.#isOverRangeNumber(strToNumber)) {
			formattedError(ERROR_MESSAGE.IS_OVER_NUMBER_RANGE);
		}

		return true;
	}

	#generalValidation(str) {
		if (this.#isEmpty(str)) {
			formattedError(ERROR_MESSAGE.EMPTY);
		}

		if (this.#hasWhiteSpace(str)) {
			formattedError(ERROR_MESSAGE.HAS_WHITE_SPACE);
		}
	}

	#isEmpty(str) {
		return str.length === 0;
	}

	#hasWhiteSpace(str) {
		return str.includes(' ');
	}

	#isNaN(str) {
		const numberStr = Number(str);
		return isNaN(numberStr);
	}

	#isNegative(number) {
		return number < 0;
	}

	#isDividedByThousand(number) {
		return number % 1000 == 0;
	}

	#isNotNumberOrComma(str) {
		const REGEX = /^[0-9,]+$/;
		return !REGEX.test(str);
	}

	#isMatchLottoCount(lottoNumber) {
		return lottoNumber.length === LOTTO_COUNT;
	}

	#isDuplicated(lottoNumber) {
		const set = new Set(lottoNumber);
		const arrLength = lottoNumber.length;
		const setLength = set.size;

		return !(arrLength === setLength);
	}

	#isOverRangeNumber(number) {
		return number > MAX_LOTTO_NUMBER || number < MIN_LOTTO_NUMBER;
	}

	#isOverRangeNumbers(lottoNumber) {
		return lottoNumber.some((n) => this.#isOverRangeNumber(n));
	}
}
