import { Console } from '@woowacourse/mission-utils';

import LotteryRetailer from './LotteryRetailer.js';

import {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  LOTTO,
  MATCHING_COUNT,
  OUTPUT_MESSAGE,
  PRIZE,
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

    const prize = this.#evaluateTicketWinnings(tickets);
    this.#showWinningStats(prize);
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

  #evaluateTicketWinnings(tickets) {
    const matchResults = tickets.map((ticket) =>
      ticket.match(this.#winningNumbers)
    );

    const prize = {
      fifth: matchResults //
        .filter(({ matchingCount }) => matchingCount === 3).length,
      fourth: matchResults //
        .filter(({ matchingCount }) => matchingCount === 4).length,
      third: matchResults //
        .filter(({ matchingCount }) => matchingCount === 5).length,
      second: matchResults //
        .filter(
          ({ matchingCount, hasBonus }) => matchingCount === 5 && hasBonus
        ).length,
      first: matchResults //
        .filter(({ matchingCount }) => matchingCount === 6).length,
    };

    return prize;
  }

  #showWinningStats(prize) {
    Console.print(OUTPUT_MESSAGE.statistics);

    Object.entries(prize).forEach(([key, value]) => {
      Console.print(
        OUTPUT_MESSAGE.statisticsDetail({
          prize: key,
          matchingCount: MATCHING_COUNT[key],
          lotteryPrize: PRIZE[key],
          winningCount: value,
        })
      );
    });
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
