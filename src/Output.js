import { PROMPT } from "./constant/promptMessages.js";
import { printOutput } from "./missionUtils.js";

class Output {
	async printLottoCount(lottoCount) {
		printOutput(PROMPT.LOTTO_COUNT(lottoCount));
	}

	async printLottoNumbers(lottos) {
		printOutput(PROMPT.LOTTO_NUMBERS(lottos));
	}

	async printWinningCount(winningMap) {
		printOutput(PROMPT.LOTTO_WINNING_COUNT(winningMap));
	}

	async printWinningRate(winningRate) {
		printOutput(PROMPT.LOTTO_WINNING_RATE(winningRate));
	}
}
export default Output;
