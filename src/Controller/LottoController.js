import { Console } from '@woowacourse/mission-utils';
import { LottoMachine } from '../Model/LottoMachine.js';
import { LottoMatcher } from '../Model/LottoMatcher.js';
import { InputView } from '../View/InputView.js';
import { OutputView } from '../View/OutputView.js';

export class LottoController {
	constructor() {
		this.inputView = new InputView();
		this.outputView = new OutputView();
		this.lottoMachine = new LottoMachine();
		this.lottos = [];
	}

	async getMoneyFromInput() {
		const money = await this.inputView.getPurchaseCost();
		return money;
	}

	async getWinningNumberFromInput() {
		const winningNumber = await this.inputView.getWinningNumber();
		return winningNumber;
	}

	async getBonusNumberFromInput() {
		const bonusNumber = await this.inputView.getBonusNumber();
		return bonusNumber;
	}

	async run() {
		try {
			const money = await this.getMoneyFromInput();
			this.lottoMachine.buyLotto(money);
			this.lottos = this.lottoMachine.lottos;

			this.outputView.printLottoNumbers(this.lottos);
			const winningNumber = await this.getWinningNumberFromInput();
			const bonusNumber = await this.getBonusNumberFromInput();

			const lottoMatcher = new LottoMatcher(
				this.lottos,
				winningNumber,
				bonusNumber,
				money
			);
			lottoMatcher.matchLottos();

			const statistics = lottoMatcher.statistics;
			const winningCount = statistics.winningCount;
			const bonusCount = statistics.bonusCount;

			this.outputView.printStatistics(winningCount, bonusCount);
			const benefitRate = statistics.benefitRate;
			this.outputView.printBenefitRate(benefitRate);
		} catch (error) {
			Console.print(error.message);
		}
	}
}
