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
}

export default Input;
