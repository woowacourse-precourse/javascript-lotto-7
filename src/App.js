import Input from "./Input.js";
import { LOTTO_MONEY } from "./constant.js";

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
	}

	async #calculateLottoCount() {
		return Math.floor(this.#lottoMoney / LOTTO_MONEY);
	}
}

export default App;
