class ValidateWinningNumbers {
	isValidFormat(input) {
		const regex = new RegExp('^(\\d+, ){5}\\d+$');

		if (!regex.test(input)) {
			throw new Error(
				'[ERROR] 쉼표(,)로 구분된 6개의 숫자만 입력이 가능합니다.'
			);
		}
	}

	isValidDuplicate(numbers) {
		const dedupe = new Set(numbers);
		if (dedupe.size !== numbers.length) {
			throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
		}
	}

	isValidRange(number) {
		if (number < 1 || number > 45) {
			throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
		}
	}
}

export default ValidateWinningNumbers;
