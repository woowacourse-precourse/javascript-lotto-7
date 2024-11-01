import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import {
  BasicValidation,
  WinningNumberValidation,
  BonusNumberValidation,
} from '../Validation.js';
import {
  LOTTO_NUMBER_STANDARD,
  LOTTO_PRICE_UNIT,
  fifthWinner,
  secondWinner,
  thirdWinner,
  fourthWinner,
  firstWinner,
  losing_ticket,
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
      .split(LOTTO_NUMBER_STANDARD.separator)
      .map((number) => {
        return Number(number);
      });
  }

  #validateWinningNumbers(winningNumbers) {
    WinningNumberValidation.InputSeparator(winningNumbers);

    const parseWinningNumbers = this.#parseWinningNumbers(winningNumbers);

    WinningNumberValidation.InputOverlap(parseWinningNumbers);
    BasicValidation.inputLength(
      parseWinningNumbers,
      LOTTO_NUMBER_STANDARD.length
    );

    parseWinningNumbers.forEach((number) => {
      WinningNumberValidation.InputNumberType(number);
      WinningNumberValidation.InputLottoRange(number);
    });
  }

  #validateBonusNumber(bonusNumber) {
    BasicValidation.InputNumberType(bonusNumber);
    BasicValidation.InputLength(bonusNumber, 1);
    BonusNumberValidation.InputOverlap(bonusNumbernumber, this.#winningNumbers);
  }

  setWinningNumbers(winningNumbers) {
    this.#validateWinningNumbers(winningNumbers);
    this.#winningNumbers = this.#parseWinningNumbers(winningNumbers);
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  drawRandomLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_STANDARD.min,
      LOTTO_NUMBER_STANDARD.max,
      LOTTO_NUMBER_STANDARD.length
    );
  }

  drawSingleLottoTicket() {
    const numbers = this.drawRandomLottoNumbers();
    return new Lotto(numbers.sort((a, b) => a - b));
  }

  purchaseLottoTickets() {
    const ticketCount = user.getMoney() / LOTTO_PRICE_UNIT;

    const tickets = Array.from({ length: ticketCount }).map(() => {
      return this.drawSingleLottoTicket();
    });

    user.setTickets(tickets);
    return tickets;
  }

  calculateWinningResult(tickets) {
    const results = {
      [losing_ticket.rank]: 0,
      [firstWinner.rank]: 0,
      [secondWinner.rank]: 0,
      [thirdWinner.rank]: 0,
      [fourthWinner.rank]: 0,
      [fifthWinner.rank]: 0,
    };

    tickets.forEach((ticket) => {
      const rank = ticket.calculateWinningLotto(
        this.#winningNumbers,
        this.#bonusNumber
      );
      results[rank] += 1;
    });

    return results;
  }

  calculateTotalReturn(money, results) {
    const total =
      results[firstWinner.rank] * firstWinner.reward +
      results[secondWinner.rank] * secondWinner.reward +
      results[thirdWinner.rank] * thirdWinner.reward +
      results[fourthWinner.rank] * fourthWinner.reward +
      results[fifthWinner.rank] * fifthWinner.reward;

    return Math.round((total / money) * 10000) / 100;
  }
  calculateMatchResults(tickets, money) {
    const results = this.calculateWinningResult(tickets);
    const totalReturn = this.calculateTotalReturn(money, results);
    return { results: results, totalReturn, totalReturn };
  }
}
export default LOTTO_MACHINE;
