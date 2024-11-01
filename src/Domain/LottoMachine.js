import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import {
  BasicValidation,
  WinningNumberValidation,
  BonusNumberValidation,
} from '../Validation.js';

class LOTTO_MACHINE {
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
  }

  #parseWinningNumbers(winningNumbers) {
    return winningNumbers.split(',').map((number) => {
      return Number(number);
    });
  }

  #validateWinningNumbers(winningNumbers) {
    WinningNumberValidation.InputSeparator(winningNumbers);

    const parseWinningNumbers = this.#parseWinningNumbers(winningNumbers);

    WinningNumberValidation.InputOverlap(parseWinningNumbers);
    BasicValidation.inputLength(parseWinningNumbers, 6);

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
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  drawSingleLottoTicket() {
    const numbers = this.drawRandomLottoNumbers();
    return new Lotto(numbers.sort((a, b) => a - b));
  }

  purchaseLottoTickets() {
    const ticketCount = user.getMoney() / 1000;

    const tickets = Array.from({ length: ticketCount }).map(() => {
      return this.drawSingleLottoTicket();
    });

    user.setTickets(tickets);
    return tickets;
  }

  calculateWinningResult(tickets) {
    const results = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    tickets.forEach((ticket) => {
      const rank = ticket.calculateWinningLotto(
        this.#winningNumbers,
        this.#bonusNumber
      );
      results[rank] += 1;
    });

    return results;
  }

  calculateTotalReturn(results, money) {
    const total =
      results['1'] * 2000000000 +
      results['2'] * 30000000 +
      results['3'] * 1500000 +
      results['4'] * 50000 +
      results['5'] * 5000;
    return (total / money) * 100;
  }
}
export default LOTTO_MACHINE;
