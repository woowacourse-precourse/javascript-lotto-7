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
	constructor() {
		this.userInput = new Input();
		this.userOutput = new Output();
		this.winningMap = {
			"5rank": 0,
			"4rank": 0,
			"3rank": 0,
			"2rank": 0,
			"1rank": 0,
		};
	}

	async run() {
		const lottoMoney = await this.userInput.getLottoMoney();
		const lottoCount = await this.calculateLottoCount(lottoMoney);

		await this.userOutput.printLottoCount(lottoCount);
		const lottoNumbers = await this.getLotto(lottoCount);

		const winningNumber = await this.userInput.getWinningNumber();
		const bonusNumber = await this.userInput.getBonusNumber(winningNumber);
		this.getWinningCount(winningNumber, lottoNumbers, bonusNumber);

		await this.userOutput.printWinningCount(this.winningMap);
		const winningRate = await this.getTotalWinnings(lottoMoney);
		await this.userOutput.printWinningRate(winningRate);
	}

	async calculateLottoCount(lottoMoney) {
		return Math.floor(lottoMoney / LOTTO_MONEY);
	}

	async getLotto(lottoCount) {
		return Array.from({ length: lottoCount }, () => {
			const lottos = this.getRandomNumbers();
			this.printLottoNumbers(lottos);
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

	printLottoNumbers(lottos) {
		printOutput(PROMPT.LOTTO_NUMBERS(lottos));
	}

	getWinningCount(winningNumber, lottoNumbers, bonusNumber) {
		lottoNumbers.forEach((lottoNumber) => {
			const lotto = new Lotto(lottoNumber);
			const winningRank = lotto.checkWinning(winningNumber, bonusNumber);

			if (winningRank) {
				this.winningMap[winningRank] += 1;
			}
		});
	}

	async getTotalWinnings(lottoMoney) {
		let totalWinnings = 0;

		for (const rank in this.winningMap) {
			if (PRIZE_MAP[rank]) {
				totalWinnings += this.winningMap[rank] * PRIZE_MAP[rank];
			}
		}

		return ((totalWinnings / lottoMoney) * 100).toFixed(1);
	}
}

export default App;
