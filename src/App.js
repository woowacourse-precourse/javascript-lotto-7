import { Console } from '@woowacourse/mission-utils';

import LotteryRetailer from './LotteryRetailer.js';

import {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  LOTTO,
  OUTPUT_MESSAGE,
} from './constants/index.js';

class App {
  #inputView;

  constructor(inputView) {
    this.#inputView = inputView;
  }

  async run() {
    const lotteryRetailer = new LotteryRetailer();
    const purchasePrice = await this.#inputView.readPurchasePrice();
    const tickets = lotteryRetailer.issueTicket(purchasePrice);

    lotteryRetailer.showLottoTickets(tickets);

    const winningNumbers = await this.#inputView.readWinningNumbers();
    const bonus = await this.#inputView.readBonusNumber(winningNumbers);

    lotteryRetailer.showWinningResult(tickets, winningNumbers);
    lotteryRetailer.showLotteryYield(purchasePrice, tickets);
  }
}

export default App;
