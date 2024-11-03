import { Console } from '@woowacourse/mission-utils';
import LottoInputReader from '../classes/LottoInputReader.js';

class LottoInputHandler {
  static async handleLottoPurchaseAmount() {
    while (true) {
      try {
        const purchaseAmount = await LottoInputReader.readLottoPurchaseAmount();
        return purchaseAmount;
      } catch (error) {
        Console.print(`${error.message}\n`);
      }
    }
  }

  static async handleWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await LottoInputReader.readWinningNumbers();
        return winningNumbers;
      } catch (error) {
        Console.print(`${error.message}\n`);
      }
    }
  }

  static async handleBonusNumber() {
    while (true) {
      try {
        const bonusNumber = await LottoInputReader.readBonusNumber();
        return bonusNumber;
      } catch (error) {
        Console.print(`${error.message}`);
      }
    }
  }
}

export default LottoInputHandler;
