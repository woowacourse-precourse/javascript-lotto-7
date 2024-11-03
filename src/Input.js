import {
	ERROR_MESSAGE,
	LOTTO_MAX_MONEY,
	LOTTO_MONEY,
	PROMPT,
} from "./constant.js";
import { printOutput, userInput } from "./missionUtils.js";

class Input {
	async getLottoMoney() {
		try {
			const MONEY = await this.getInputMoney();
			return MONEY;
		} catch (error) {
			printOutput(error.message);
			return await this.getLottoMoney();
		}
	}

	async getInputMoney() {
		const MONEY = await userInput(PROMPT.LOTTO_BUY);
		await this.validateLottoMoney(MONEY);
		return parseInt(MONEY, 10);
	}

	async validateLottoMoney(money) {
		const INPUT_NUMBER = parseInt(money, 10);

		if (INPUT_NUMBER % LOTTO_MONEY) {
			throw new Error(ERROR_MESSAGE.WRONG_UNIT);
		}
		if (Number.isNaN(INPUT_NUMBER)) {
			throw new Error(ERROR_MESSAGE.WRONG_CHARACTER);
		}
		if (INPUT_NUMBER > LOTTO_MAX_MONEY) {
			throw new Error(ERROR_MESSAGE.PASSED_BUY_LIMIT);
		}
	}

	async getWinningNumber() {
		try {
			const WINNING_NUMBER = await this.getInputWinningNumber();
			return WINNING_NUMBER;
		} catch (error) {
			printOutput(error.message);
			return await this.getWinningNumber();
		}
	}

	async getInputWinningNumber() {
		const WINNING_NUMBER = await userInput(PROMPT.LOTTO_WINNING_NUMBER);
		await this.validateWinningNumber(WINNING_NUMBER);
		return WINNING_NUMBER;
	}

	async validateWinningNumber(winningNumber) {
		const INPUT_WINNING = winningNumber.split(",");
		const validPattern = /^[0-9,]+$/;

		if (!validPattern.test(winningNumber)) {
			throw new Error(ERROR_MESSAGE.WRONG_CHARACTER);
		}
		if (INPUT_WINNING.length !== 6) {
			throw new Error(ERROR_MESSAGE.WRONG_WINNING_DIGIT);
		}
		if (INPUT_WINNING.some((number) => number < 1 || number > 45)) {
			throw new Error(ERROR_MESSAGE.PASSED_WINNING_RANGE);
		}
		if (new Set(INPUT_WINNING).size !== INPUT_WINNING.length) {
			throw new Error(ERROR_MESSAGE.DUPLICATE_WINNING_NUMBER);
		}
	}

	async getBonusNumber(winningNumber) {
		try {
			const BONUS_NUMBER = await this.getInputBonusNumber(winningNumber);
			return BONUS_NUMBER;
		} catch (error) {
			printOutput(error.message);
			return this.getBonusNumber(winningNumber);
		}
	}

	async getInputBonusNumber(winningNumber) {
		const BONUS_NUMBER = await userInput(PROMPT.LOTTO_BONUS_NUMBER);
		await this.validateBonusNumber(winningNumber, BONUS_NUMBER);
		return BONUS_NUMBER;
	}

	async validateBonusNumber(winningNumber, bonusNumber) {
		const INPUT_WINNING = parseInt(bonusNumber, 10);
		const isDuplicate = winningNumber.includes(bonusNumber);

		if (INPUT_WINNING < 1 || INPUT_WINNING > 45) {
			throw new Error(ERROR_MESSAGE.PASSED_BONUS_RANGE);
		}
		if (isDuplicate) {
			throw new Error(ERROR_MESSAGE.DUPLICATE_WINNING_NUMBER);
		}
	}
}

export default Input;
