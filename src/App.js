import { Console } from '@woowacourse/mission-utils';

import LotteryRetailer from './LotteryRetailer.js';

import { INPUT_MESSAGE, OUTPUT_MESSAGE } from './constants/index.js';

class App {
  async run() {
    const lotteryRetailer = new LotteryRetailer();
    const price = await Console.readLineAsync(INPUT_MESSAGE.price);
    const tickets = lotteryRetailer.issueTicket(price);

    this.#showLottoTickets(tickets);
  }

  #showLottoTickets(tickets) {
    Console.print(OUTPUT_MESSAGE.amount(tickets.length));
    tickets.forEach((ticket) => ticket.show());
  }
}

export default App;
