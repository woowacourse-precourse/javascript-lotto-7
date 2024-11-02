import LotteryRetailer from './LotteryRetailer.js';

class App {
  #inputView;
  #outputView;

  constructor(inputView, outputView) {
    this.#inputView = inputView;
    this.#outputView = outputView;
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

    lotteryRetailer.showLotteryYield(purchasePrice, tickets);
  }
}

export default App;
