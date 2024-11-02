import Input from "./Input.js";
import Lotto from "./Lotto.js";
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
	#winningMap;

	constructor() {
		this.userInput = new Input();
	}

	async run() {
		this.#lottoMoney = await this.userInput.getLottoMoney();
		this.#lottoCount = await this.#calculateLottoCount();

		await this.#printLottoCount();
		this.#lottoNumbers = await this.#getLotto();

		this.#winningNumber = await this.userInput.getWinningNumber();
		this.#bonusNumber = await this.userInput.getBonusNumber();
		this.#winningMap = this.#getWinningCount();
	}

	async #calculateLottoCount() {
		return Math.floor(this.#lottoMoney / LOTTO_MONEY);
	}

	async #printLottoCount() {
		printOutput(PROMPT.LOTTO_COUNT(this.#lottoCount));
	}

	async #getLotto() {
		return Array.from({ length: this.#lottoCount }, () => {
			const lottos = this.getRandomNumbers();
			this.#printLottoNumbers(lottos);
			return lottos;
		});
	}

	getRandomNumbers() {
		return randomNumbersInRange(
			LOTTO_MIN_NUMBER,
			LOTTO_MAX_NUMBER,
			LOTTO_LENGTH
		).sort((a, b) => a - b);
	}

	#printLottoNumbers(lottos) {
		printOutput(PROMPT.LOTTO_NUMBERS(lottos));
	}

	#setWinningCountMap() {
		return {
			"5rank": 0,
			"4rank": 0,
			"3rank": 0,
			"2rank": 0,
			"1rank": 0,
		};
	}

	#getWinningCount() {
		const winningCountMap = this.#setWinningCountMap();

		this.#lottoNumbers.forEach((lottoNumber) => {
			const lotto = new Lotto(lottoNumber);
			const winningRank = lotto.checkWinning(
				this.#winningNumber,
				this.#bonusNumber
			);

			if (winningRank) {
				winningCountMap[winningRank] += 1;
			}
		});
		return winningCountMap;
	}
}

export default App;
