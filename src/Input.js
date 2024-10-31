import { PROMPT } from "./constant.js";
import { userInput } from "./missionUtils.js";

class Input {
	async getLottoMoney() {
		try {
			const MONEY = await userInput(PROMPT.LOTTO_BUY);
			return MONEY;
		} catch (error) {
			console.log(error.message);
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
}

export default Input;
