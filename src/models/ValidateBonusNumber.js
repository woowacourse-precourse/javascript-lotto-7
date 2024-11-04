class ValidateBonusNumber {
	isValidNumber(input) {
		if (Number.isNaN(Number(input))) {
			throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
		}
	}

	isValidRange(number) {
		if (number < 1 || number > 45) {
			throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
		}
	}

	isValidDuplicate(bonusNum, winningNums) {
		if (winningNums.includes(bonusNum)) {
			throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
		}
	}

	validate(input, winningNums) {
		this.isValidNumber(input);
		const bonusNum = Number(input);
		this.isValidRange(bonusNum);
		this.isValidDuplicate(bonusNum, winningNums);
		return bonusNum;
	}
}

export default ValidateBonusNumber;
