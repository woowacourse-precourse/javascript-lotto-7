export function validateBonusNumber(bonus, winningNumbers) {
	if (isNaN(bonus)) {
		throw new Error("[ERROR] 숫자만 입력해주세요.");
	}

	const bonusNumber = Number(bonus);
	if (bonusNumber < 1 || bonusNumber > 45) {
		throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
	}

	if (winningNumbers.includes(bonusNumber)) {
		throw new Error("[ERROR] 보너스 숫자는 당첨번호 6자리 숫자와 중복될 수 없습니다.");
	}
}