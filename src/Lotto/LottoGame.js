import { Console } from '@woowacourse/mission-utils';
import TicketManager from './TicketManager.js';
import StatisticsCalculator from './StatisticsCalculator.js';
import InputManager from './InputManager.js';

class LottoGame {
	constructor() {
		this.purchaseAmount = 0;
		this.ticketCount = 0;
		this.lottoTickets = [];
		this.winningNumbers = [];
		this.bonusNumber = 0;
		this.winningStatistics = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
		this.profitRate = 0;
	}

	async initialize() {
		this.purchaseAmount = await InputManager.inputAndValidatePurchaseAmount();
		this.ticketCount = Math.floor(this.purchaseAmount / 1000);
		this.printTicketCount();

		this.lottoTickets = TicketManager.generateLottos(this.ticketCount);
		TicketManager.printLottos(this.lottoTickets);

		this.winningNumbers = await InputManager.inputAndValidateWinningNumbers();
		this.bonusNumber = await InputManager.inputAndValidateBonusNumber(this.winningNumbers);

		this.winningStatistics = StatisticsCalculator.calculateWinningStatistics(
			this.lottoTickets,
			this.winningNumbers,
			this.bonusNumber
		);

		StatisticsCalculator.printWinningStatistics(this.winningStatistics);

		this.profitRate = StatisticsCalculator.calculateProfitRate(this.winningStatistics, this.purchaseAmount);
		StatisticsCalculator.printProfitRate(this.profitRate);
	}

	printTicketCount() {
		Console.print(`\n${this.ticketCount}개를 구매했습니다.`);
	}
}

export default LottoGame;
