import InputView from './InputView.js';
import OutputView from './OutputView.js';
import LotteryRetailer from './LotteryRetailer.js';

class App {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async run() {
    const lotteryRetailer = new LotteryRetailer();
    const purchasePrice = await this.#inputView.readPurchasePrice();
    const tickets = lotteryRetailer.issueTicket(purchasePrice);

    this.#outputView.showLottoTickets(tickets);

    const winningNumbers = await this.#inputView.readWinningNumbers();
    const bonus = await this.#inputView.readBonusNumber(winningNumbers);

    const ticketCountForPrize = lotteryRetailer.evaluateTicketWinnings(
      tickets,
      winningNumbers,
      bonus
    );
    this.#outputView.showWinningStatistics(ticketCountForPrize);

    const lotteryYield = lotteryRetailer.evaluateLotteryYield(
      ticketCountForPrize,
      purchasePrice
    );
    this.#outputView.showLotteryYield(lotteryYield);
  }
}

export default App;
