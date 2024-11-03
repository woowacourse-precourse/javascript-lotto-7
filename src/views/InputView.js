import { Console } from '@woowacourse/mission-utils';
import LottoGenerator from '../classes/LottoGenerator.js';
import OutputView from './OutputView.js';

class InputView {
  async inputPurchaseAmount() {
    while (true) {
      try {
        const purchasePrice = await Console.readLineAsync(
          '구입금액을 입력해 주세요.\n'
        );
        return new LottoGenerator(Number(purchasePrice));
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  async inputWinningNumbers() {
    while (true) {
      try {
        return await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  async inputBonusNumber() {
    while (true) {
      try {
        return await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }
}

export default InputView;
