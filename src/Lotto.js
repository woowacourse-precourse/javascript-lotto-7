import ValidateWinningNumbers from './models/ValidateWinningNumbers.js';

class Lotto {
	#numbers;

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers.sort((a, b) => a - b);
	}

	#validate(numbers) {
		const validator = new ValidateWinningNumbers();
		validator.validateFormat(numbers.join(', '));
		validator.validateDuplicate(numbers);
		numbers.forEach((num) => validator.validateRange(num));
	}

	getNumbers() {
		return this.#numbers;
	}
}

export default Lotto;
