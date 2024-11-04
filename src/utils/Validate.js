export function validatePrice(price) {
	if (isNaN(price)) {
		throw new Error("[ERROR] 입력 값은 정수여야 합니다.");
	}

	if (price < 1000) {
		throw new Error("[ERROR] 입력 금액은 1000원 이상이어야 합니다.");
	}

	if (price > 100000) {
		throw new Error("[ERROR] 입력 금액은 100000원 이하여야 합니다.");
	}

	if (price % 1000 !== 0) {
		throw new Error("[ERROR] 입력 금액은 1000원 단위여야 합니다.");
	}
}

export function validateBonusNumber(bonusNumber) {
	if (bonusNumber < 1 || bonusNumber > 45) {
		throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
	}
}
