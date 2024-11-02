import { Console } from '@woowacourse/mission-utils';

import LotteryRetailer from './LotteryRetailer.js';

import {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  LOTTO,
  OUTPUT_MESSAGE,
} from './constants/index.js';

class App {
  async run() {
    const lotteryRetailer = new LotteryRetailer();
    const price = await Console.readLineAsync(INPUT_MESSAGE.price);
    const tickets = lotteryRetailer.issueTicket(price);

    this.#showLottoTickets(tickets);

    const winningNumbers = this.readWinningNumbers();
  }

  async readWinningNumbers() {
    const winningNumbersInput = await Console.readLineAsync(
      INPUT_MESSAGE.winningNumbers
    );
    const winningNumbers = winningNumbersInput //
      .split(',')
      .map((number) => number.trim());

    this.#validateWinningNumbers(winningNumbers);

    return winningNumbers;
  }

  #showLottoTickets(tickets) {
    Console.print(OUTPUT_MESSAGE.amount(tickets.length));
    tickets.forEach((ticket) => ticket.show());
    Console.print('');
  }

  #validateWinningNumbers(numbers) {
    const invalidLength = numbers.length !== LOTTO.numberCount;
    if (invalidLength) {
      throw Error(ERROR_MESSAGE.winningNumbers.length);
    }

    const isNotNumber = numbers.some(isNaN);
    if (isNotNumber) {
      throw Error(ERROR_MESSAGE.winningNumbers.notNumber);
    }

    const isInvalidRange = numbers.some(LOTTO.isInvalidRange);
    if (isInvalidRange) {
      throw Error(ERROR_MESSAGE.winningNumbers.range);
    }

    const uniqueNumbers = new Set(numbers);
    const hasDuplicateNumber = uniqueNumbers.size !== LOTTO.numberCount;
    if (hasDuplicateNumber) {
      throw Error(ERROR_MESSAGE.winningNumbers.duplicate);
    }
  }
}

export default App;
