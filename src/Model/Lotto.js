import { ERROR_MESSAGE } from '../constants/messages.js';
import { formattedError } from '../utils/error.js';

class Lotto {
	#numbers;

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers;
	}

	#validate(numbers) {
		if (numbers.length !== 6) {
			throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
		}
		if (this.#hasDuplicateNumbers(numbers)) {
			formattedError(ERROR_MESSAGE.IS_DUPLICATED);
		}
	}

	// TODO: 추가 기능 구현

	#hasDuplicateNumbers(numbers) {
		const uniqueNumbers = new Set(numbers);
		return uniqueNumbers.size !== numbers.length;
	}

	get lottoNumbers() {
		return this.#numbers;
	}
}

export default Lotto;
