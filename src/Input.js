import { ERROR_MESSAGE, LOTTO_MONEY, PROMPT } from "./constant.js";
import { printOutput, userInput } from "./missionUtils.js";

class Input {
	async getLottoMoney() {
		while (true) {
			try {
				const MONEY = await userInput(PROMPT.LOTTO_BUY);
				await this.validateLottoMoney(MONEY);
				return MONEY;
			} catch (error) {
				printOutput(error.message);
			}
		}
	}

	async validateLottoMoney(money) {
		const INPUT_NUMBER = parseInt(money, 10);

		if (INPUT_NUMBER % LOTTO_MONEY) {
			throw new Error(ERROR_MESSAGE.WRONG_UNIT);
		}

		if (Number.isNaN(INPUT_NUMBER)) {
			throw new Error(ERROR_MESSAGE.WRONG_CHARACTER);
		}
	}

	async getWinningNumber() {
		try {
			const WINNING_NUMBER = await userInput(PROMPT.LOTTO_WINNING_NUMBER);
			return WINNING_NUMBER;
		} catch (error) {
			console.log(error.message);
		}
	}

	async getBonusNumber() {
		try {
			const BONUS_NUMBER = await userInput(PROMPT.LOTTO_BONUS_NUMBER);
			return BONUS_NUMBER;
		} catch (error) {
			console.log(error.message);
		}
	}
}

export default Input;
