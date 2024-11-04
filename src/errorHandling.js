export function validatePurchaseAmount(amount) {
	if (amount === "") {
		throw new Error("[ERROR] 값을 입력해주세요.");
	}
	if (isNaN(amount)) {
		throw new Error("[ERROR] 숫자만 입력 가능합니다.");
	}
	if (amount % 1000 !== 0) {
		throw new Error("[ERROR] 1000원으로 나눠떨어져야 합니다.");
	}
	if (amount < 1000) {
		throw new Error("[ERROR] 구입 금액은 1000원 이상이어야 합니다.");
	}
}

export function validateUserWinningNumber(input) {
	if (!/^\d+(,\d+)*$/.test(input)) {
		throw new Error("[ERROR] 숫자는 쉼표로만 구분 가능합니다.");
	}

	const numbers = input.split(",").map(Number);

	if (numbers.length !== 6) {
		throw new Error("[ERROR] 당첨번호는 6개를 입력하셔야 합니다.");
	}

	if (numbers.some((num) => num < 1 || num > 45)) {
		throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
	}

	const uniqueNumbers = new Set(numbers);
	if (uniqueNumbers.size !== numbers.length) {
		throw new Error("[ERROR] 중복되는 숫자를 입력하실 수 없습니다.");
	}
}

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