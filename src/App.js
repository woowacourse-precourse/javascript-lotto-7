import { Console } from '@woowacourse/mission-utils';
import {
  purchaseAmountValidation,
  winningLottoValidation,
} from './inputHandler/inputValidation.js';

class App {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      '구입금액을 입력해 주세요.\n',
    );
    return purchaseAmountValidation(purchaseAmount);
  }

  async readWinningLotto() {
    const winningLottoInput = await Console.readLineAsync(
      '당첨 번호 6자리 숫자를 쉽표로 구분하여 입력해 주세요.\n',
    );
    return winningLottoValidation(winningLottoInput);
  }

  async run() {
    try {
      const purchaseAmount = await this.readPurchaseAmount();
      const winningLotto = await this.readWinningLotto();
    } catch (error) {
      throw new Error('[ERROR] ' + error);
    }
  }
}

export default App;
