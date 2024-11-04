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

		const numSet = new Set(numbers);
		if (numSet.size !== numbers.length) {
			throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
		}

		this.numbers = numbers;
	}

	getNumbers() {
		return this.#numbers;
	}

	toString() {
		return `{${[...this.#numbers].join(', ')}}`;
	}
}

export default Lotto;
