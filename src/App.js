import Input from "./Input.js";
import Lotto from "./Lotto.js";
import Output from "./Output.js";
import {
	LOTTO_LENGTH,
	LOTTO_MAX_NUMBER,
	LOTTO_MIN_NUMBER,
	LOTTO_MONEY,
	PRIZE_MAP,
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
	#winningRate;

	constructor() {
		this.userInput = new Input();
		this.userOutput = new Output();
	}

	async run() {
		this.#lottoMoney = await this.userInput.getLottoMoney();
		this.#lottoCount = await this.#calculateLottoCount();

		await this.userOutput.printLottoCount(this.#lottoCount);
		this.#lottoNumbers = await this.#getLotto();

		this.#winningNumber = await this.userInput.getWinningNumber();
		this.#bonusNumber = await this.userInput.getBonusNumber(
			this.#winningNumber
		);
		this.#winningMap = this.#getWinningCount();

		await this.userOutput.printWinningCount(this.#winningMap);
		this.#winningRate = await this.#getTotalWinnings();
		await this.userOutput.printWinningRate(this.#winningRate);
	}

	async #calculateLottoCount() {
		return Math.floor(this.#lottoMoney / LOTTO_MONEY);
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

	async #getTotalWinnings() {
		let totalWinnings = 0;

		for (const rank in this.#winningMap) {
			if (PRIZE_MAP[rank]) {
				totalWinnings += this.#winningMap[rank] * PRIZE_MAP[rank];
			}
		}

		return ((totalWinnings / this.#lottoMoney) * 100).toFixed(1);
	}
}

export default App;
