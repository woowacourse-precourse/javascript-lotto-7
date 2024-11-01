import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import {
  basicValidation,
  winningNumberValidation,
  bonusNumberValidation,
} from '../Validation.js';
import {
  LOTTO_NUMBER_STANDARD,
  LOTTO_PRICE_UNIT,
  PRIZE,
} from '../Constants/Constant.js';

class LOTTO_MACHINE {
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
  }

  #parseWinningNumbers(winningNumbers) {
    return winningNumbers
      .replace(/\s+/g, '')
      .split(LOTTO_NUMBER_STANDARD.separator)
      .map((number) => {
        return Number(number);
      });
  }

  #validateWinningNumbers(winningNumbers) {
    winningNumberValidation.validateInputSeparator(winningNumbers);

    const parsedWinningNumbers = this.#parseWinningNumbers(winningNumbers);

    winningNumberValidation.validateInputOverlap(parsedWinningNumbers);
    basicValidation.validateInputLength(
      parsedWinningNumbers,
      LOTTO_NUMBER_STANDARD.length
    );

    parsedWinningNumbers.forEach((number) => {
      basicValidation.validateInputNumberType(number);
      winningNumberValidation.validateInputLottoRange(number);
    });
  }

  #validateBonusNumber(bonusNumber) {
    basicValidation.validateInputNumberType(bonusNumber);
    winningNumberValidation.validateInputLottoRange(bonusNumber);
    bonusNumberValidation.validateInputOverlap(
      bonusNumber,
      this.#winningNumbers
    );
  }

  setWinningNumbers(winningNumbers) {
    this.#validateWinningNumbers(winningNumbers);
    this.#winningNumbers = this.#parseWinningNumbers(winningNumbers);
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  drawLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_STANDARD.min,
      LOTTO_NUMBER_STANDARD.max,
      LOTTO_NUMBER_STANDARD.length
    );
  }

  drawSingleLottoTicket() {
    const numbers = this.drawLottoNumbers();
    return new Lotto(numbers.sort((a, b) => a - b));
  }

  purchaseLottoTickets(money) {
    const tickets = Array.from({ length: money / LOTTO_PRICE_UNIT }).map(() => {
      return this.drawSingleLottoTicket();
    });

    return tickets;
  }

  calculateWinningResult(tickets) {
    const results = PRIZE.reduce((obj, prize) => {
      obj[prize.rank] = 0;
      return obj;
    }, {});

    tickets.forEach((ticket) => {
      const rank = ticket.calculateLottoResult(
        this.#winningNumbers,
        this.#bonusNumber
      );
      results[rank] += 1;
    });

    return results;
  }

  calculateTotalReturn(money, results) {
    const total = PRIZE.reduce((acc, prize) => {
      return acc + results[prize.rank] * prize.reward;
    }, 0);

    return Math.round((total / money) * 10000) / 100;
  }

  calculateMatchResults(tickets, money) {
    const results = this.calculateWinningResult(tickets);
    const totalReturn = this.calculateTotalReturn(money, results);

    return { results, totalReturn };
  }
}
export default LOTTO_MACHINE;
