import { ERROR_MESSAGE } from '../constants/messages.js';
import { formattedError } from './error.js';

export class Validator {
	isValidCost(str) {
		const strToNumber = Number(str);
		if (this.#isEmpty(str)) {
			formattedError(ERROR_MESSAGE.EMPTY);
		}

		if (this.#hasWhiteSpace(str)) {
			formattedError(ERROR_MESSAGE.HAS_WHITE_SPACE);
		}

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
}
