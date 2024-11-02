import { Console } from '@woowacourse/mission-utils';
import {
  purchaseAmountValidation,
  winningLottoValidation,
} from './inputHandler/inputValidation';

class App {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      '구입금액을 입력해 주세요.\n',
    );
    purchaseAmountValidation(purchaseAmount);
  }

  async readWinningLotto() {
    const winningLottoInput = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요.\n',
    );
    const winningLottoArray = winningLottoInput.split(',');
    winningLottoValidation(winningLottoArray);
  }

  async run() {
    const purchaseAmount = await this.readPurchaseAmount();
    const winningLotto = await this.readWinningLotto();
  }
}

export default App;
