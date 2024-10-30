import { MONEY_PROMPT } from "./constant.js";
import { userInput } from "./missionUtils.js";

class Input {
	async getLottoMoney() {
		try {
			const MONEY = await userInput(MONEY_PROMPT);
			return MONEY;
		} catch (error) {
			console.log(error.message);
		}
	}
}

export default Input;
