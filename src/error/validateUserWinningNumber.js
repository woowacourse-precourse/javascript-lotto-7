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