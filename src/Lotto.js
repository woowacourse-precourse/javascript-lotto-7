import ValidateWinningNumbers from './models/ValidateWinningNumbers.js';

class Lotto {
	#numbers;

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers.sort((a, b) => a - b);
	}

	#validate(numbers) {
		const validator = new ValidateWinningNumbers();
		validator.isValidFormat(numbers.join(', '));
		validator.isValidDuplicate(numbers);
		numbers.forEach((num) => validator.isValidRange(num));
	}

	getNumbers() {
		return this.#numbers;
	}
}

export default Lotto;
