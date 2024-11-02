import { Console } from '@woowacourse/mission-utils';

import LotteryRetailer from './LotteryRetailer.js';

import {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  LOTTO,
  OUTPUT_MESSAGE,
} from './constants/index.js';

class App {
  #winningNumbers;
  #bonusNumber;

  async run() {
    const lotteryRetailer = new LotteryRetailer();
    const price = await Console.readLineAsync(INPUT_MESSAGE.price);
    const tickets = lotteryRetailer.issueTicket(price);

    this.#showLottoTickets(tickets);

    this.#winningNumbers = await this.readWinningNumbers();
    this.#bonusNumber = await this.readBonusNumber();
  }

  async readWinningNumbers() {
    const winningNumbersInput = await Console.readLineAsync(
      INPUT_MESSAGE.winningNumbers
    );
    const winningNumbers = winningNumbersInput //
      .split(',')
      .map((number) => number.trim());

    this.#validateWinningNumbers(winningNumbers);

    return winningNumbers.map(Number);
  }

  async readBonusNumber() {
    const bonus = await Console.readLineAsync(INPUT_MESSAGE.bonus);
    const bonusNumber = Number(bonus.trim());

    this.#validateBonusNumber(bonusNumber);

    return bonusNumber;
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

  #validateBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw Error(ERROR_MESSAGE.bonusNumber.notNumber);
    }

    const isInvalidRange = LOTTO.isInvalidRange(bonusNumber);
    if (isInvalidRange) {
      throw Error(ERROR_MESSAGE.bonusNumber.range);
    }

    if (this.#isBonusNumberDuplicate(bonusNumber)) {
      throw Error(ERROR_MESSAGE.bonusNumber.duplicate);
    }
  }

  #isBonusNumberDuplicate(bonusNumber) {
    const winningNumbersWithBonusSet = new Set([
      ...this.#winningNumbers,
      bonusNumber,
    ]);

    return winningNumbersWithBonusSet.size === LOTTO.numberCount;
  }
}

export default App;
