import Input from "./Input.js";
import {
	LOTTO_LENGTH,
	LOTTO_MAX_NUMBER,
	LOTTO_MIN_NUMBER,
	LOTTO_MONEY,
	PROMPT,
} from "./constant.js";
import { printOutput, randomNumbersInRange } from "./missionUtils.js";

class App {
	#lottoMoney;
	#lottoCount;
	#lottoNumbers;
	#winningNumber;
	#bonusNumber;

	constructor() {
		this.userInput = new Input();
	}

	async run() {
		this.#lottoMoney = await this.userInput.getLottoMoney();
		this.#lottoCount = await this.#calculateLottoCount();

		await this.#printLottoCount();
		await this.#getLotto();

		this.#winningNumber = await this.userInput.getWinningNumber();
	}

	async #calculateLottoCount() {
		return Math.floor(this.#lottoMoney / LOTTO_MONEY);
	}

	async #printLottoCount() {
		printOutput(PROMPT.LOTTO_COUNT(this.#lottoCount));
	}

	async #getLotto() {
		return Array.from({ length: this.#lottoCount }, () => {
			this.#lottoNumbers = this.getRandomNumbers();
			this.#printLottoNumbers();
		});
	}

	getRandomNumbers() {
		return randomNumbersInRange(
			LOTTO_MIN_NUMBER,
			LOTTO_MAX_NUMBER,
			LOTTO_LENGTH
		).sort((a, b) => a - b);
	}

	#printLottoNumbers() {
		printOutput(PROMPT.LOTTO_NUMBERS(this.#lottoNumbers));
	}
}

export default App;
