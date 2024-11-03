import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async run() {
    const priceString = await this.getPriceLoop();
    const price = Number(priceString);

    const winningNumbersString = await this.readWinningNumbersString();
    const winnigNumbersArray = this.getWinningNumberArray(winningNumbersString);

    const bonusNumberString = await this.readBonusNumberString();
    const bonusNumber = Number(bonusNumberString);

    const lotto = new Lotto(winnigNumbersArray, bonusNumber, price);
    lotto.printResult();
  }

  readPriceString() {
    return Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }

  readWinningNumbersString() {
    return Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
  }

  getWinningNumberArray(numbersString) {
    return numbersString.split(',').map(Number);
  }

  readBonusNumberString() {
    return Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  }

  validatePriceString(priceString) {
    if (!Number(priceString)) {
      throw new Error('[ERROR] 구매 금액은 숫자여야 합니다.');
    }

    if (priceString <= 0) {
      throw new Error('[ERROR] 구매 금액은 0보다 커야 합니다.');
    }
  }

  async getPriceLoop() {
    try {
      const priceString = await this.readPriceString();
      this.validatePriceString(priceString);
      return Number(priceString);
    } catch (error) {
      Console.print(error.message);
      return this.getPriceLoop();
    }
  }
}

export default App;
