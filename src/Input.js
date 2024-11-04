import { PROMPT } from "./constant/promptMessages.js";
import { LOTTO_MAX_MONEY, LOTTO_MONEY } from "./constant/lotto.js";
import { ERROR_MESSAGE } from "./constant/errorMessages.js";
import { printOutput, userInput } from "./missionUtils.js";

class Input {
	async getLottoMoney() {
		try {
			const money = await this.getInputMoney();
			return money;
		} catch (error) {
			printOutput(error.message);
			return await this.getLottoMoney();
		}
	}

	async getInputMoney() {
		const money = await userInput(PROMPT.LOTTO_BUY);
		await this.validateLottoMoney(money);
		return parseInt(money, 10);
	}

	async validateLottoMoney(money) {
		const inputNumber = parseInt(money, 10);

		if (inputNumber % LOTTO_MONEY) {
			throw new Error(ERROR_MESSAGE.WRONG_UNIT);
		}
		if (Number.isNaN(inputNumber)) {
			throw new Error(ERROR_MESSAGE.WRONG_CHARACTER);
		}
		if (inputNumber > LOTTO_MAX_MONEY) {
			throw new Error(ERROR_MESSAGE.PASSED_BUY_LIMIT);
		}
	}

	async getWinningNumber() {
		try {
			const winningNumber = await this.getInputWinningNumber();
			return winningNumber;
		} catch (error) {
			printOutput(error.message);
			return await this.getWinningNumber();
		}
	}

	async getInputWinningNumber() {
		const winningNumber = await userInput(PROMPT.LOTTO_WINNING_NUMBER);
		await this.validateWinningNumber(winningNumber);
		return winningNumber;
	}

	async validateWinningNumber(winningNumber) {
		const inputWinning = winningNumber.split(",");
		const validPattern = /^[0-9,]+$/;

		if (!validPattern.test(winningNumber)) {
			throw new Error(ERROR_MESSAGE.WRONG_CHARACTER);
		}
		if (inputWinning.length !== 6) {
			throw new Error(ERROR_MESSAGE.WRONG_WINNING_DIGIT);
		}
		if (inputWinning.some((number) => number < 1 || number > 45)) {
			throw new Error(ERROR_MESSAGE.PASSED_WINNING_RANGE);
		}
		if (new Set(inputWinning).size !== inputWinning.length) {
			throw new Error(ERROR_MESSAGE.DUPLICATE_WINNING_NUMBER);
		}
	}

	async getBonusNumber(winningNumber) {
		try {
			const bonusNumber = await this.getInputBonusNumber(winningNumber);
			return bonusNumber;
		} catch (error) {
			printOutput(error.message);
			return this.getBonusNumber(winningNumber);
		}
	}

	async getInputBonusNumber(winningNumber) {
		const bonusNumber = await userInput(PROMPT.LOTTO_BONUS_NUMBER);
		await this.validateBonusNumber(winningNumber, bonusNumber);
		return bonusNumber;
	}

	async validateBonusNumber(winningNumber, bonusNumber) {
		const inputWinning = parseInt(bonusNumber, 10);
		const isDuplicate = winningNumber.includes(bonusNumber);

		if (inputWinning < 1 || inputWinning > 45) {
			throw new Error(ERROR_MESSAGE.PASSED_BONUS_RANGE);
		}
		if (isDuplicate) {
			throw new Error(ERROR_MESSAGE.DUPLICATE_WINNING_NUMBER);
		}
	}
}

export default Input;
