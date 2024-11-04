import { ERROR_MESSAGE } from "./constant/errorMessages.js";

class Lotto {
	#numbers;

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers;
	}

	#validate(numbers) {
		if (numbers.length !== 6) {
			throw new Error(ERROR_MESSAGE.WRONG_LOTTO_NUMBER);
		}
		if (new Set(numbers).size !== numbers.length) {
			throw new Error(ERROR_MESSAGE.DUPLICATE_LOTTO_NUMBER);
		}
	}

	// TODO: 추가 기능 구현
	checkWinning(winningNumbers, bonusNumber) {
		const numbersFromString = winningNumbers.split(",").map(Number);
		const matchingWinningCount = this.#numbers.filter((number) =>
			numbersFromString.includes(number)
		).length;
		const rankMap = {
			3: "5rank",
			4: "4rank",
			5: this.#checkBonusMatched(matchingWinningCount, bonusNumber),
			6: "1rank",
		};

		return rankMap[matchingWinningCount];
	}

	#checkBonusMatched(matchingWinningCount, bonusNumber) {
		const isBonusMatched = this.#numbers.filter(
			(number) => number === parseInt(bonusNumber, 10)
		);

		if (matchingWinningCount === 5 && isBonusMatched.length >= 1) {
			return "2rank";
		}
		if (matchingWinningCount === 5) {
			return "3rank";
		}
	}
}

export default Lotto;
