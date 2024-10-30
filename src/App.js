import Input from "./Input.js";
import { LOTTO_MONEY, PROMPT } from "./constant.js";
import { printOutput } from "./missionUtils.js";

class App {
	#lottoMoney;
	#lottoCount;
	#lottoNumbers;
	#bonusNumber;

	constructor() {
		this.userInput = new Input();
	}

	async run() {
		this.#lottoMoney = await this.userInput.getLottoMoney();
		this.#lottoCount = await this.#calculateLottoCount();
		await this.#printLottoCount();
	}

	async #calculateLottoCount() {
		return Math.floor(this.#lottoMoney / LOTTO_MONEY);
	}

	async #printLottoCount() {
		printOutput(PROMPT.LOTTO_COUNT(this.#lottoCount));
	}
}

export default App;
