import { Console } from '@woowacourse/mission-utils';
import { CONSTANTS } from './constants.js';
import Lotto from './Lotto.js';
import {
  validateAmount,
  validateWinningNumbers,
  validateBonusNumber,
} from './Validation.js';
import { calculateStatistics } from './Statistics.js';

class App {
  async run() {
    try {
      Console.print(CONSTANTS.MESSAGE_PURCHASE_AMOUNT);
      const totalAmount = await this.getPurchaseAmount();
      validateAmount(totalAmount);

      const numberOfTickets = totalAmount / CONSTANTS.LOTTO_PRICE;
      Console.print(
        `\n${numberOfTickets}${CONSTANTS.MESSAGE_PURCHASED_TICKETS}`
      );

      const lottos = this.generateLottos(numberOfTickets);
      lottos.forEach((lottoNumbers) => {
        Console.print(`[${lottoNumbers.join(', ')}]`);
      });

      Console.print(CONSTANTS.MESSAGE_WINNING_NUMBERS);
      const winningNumbers = await this.getWinningNumbers();

      Console.print(CONSTANTS.MESSAGE_BONUS_NUMBER);
      const bonusNumber = await this.getBonusNumber(winningNumbers);

      calculateStatistics(lottos, winningNumbers, bonusNumber, totalAmount);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async getPurchaseAmount() {
    const input = await Console.readLineAsync('');
    return Number(input);
  }

  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const lotto = new Lotto();
      lottos.push(lotto.getNumbers());
    }
    return lottos;
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync('');
    const winningNumbers = input.split(',').map(Number);
    validateWinningNumbers(winningNumbers);
    return winningNumbers;
  }

  async getBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync('');
    const bonusNumber = Number(input);
    validateBonusNumber(bonusNumber, winningNumbers);
    return bonusNumber;
  }
}

const app = new App();
export default App;
