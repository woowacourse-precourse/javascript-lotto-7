import { Console } from '@woowacourse/mission-utils';
import {
  bonusLottoValidation,
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

  async readBonusLotto(winningLotto) {
    const bonusLotto = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요.\n',
    );

    return bonusLottoValidation(bonusLotto, winningLotto);
  }

  async run() {
    try {
      const purchaseAmount = await this.readPurchaseAmount();
      const winningLotto = await this.readWinningLotto();
      const bonusLotto = await this.readBonusLotto(winningLotto);
    } catch (error) {
      throw new Error('[ERROR] ' + error);
    }
  }
}

export default App;
