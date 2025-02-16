import { Console } from '@woowacourse/mission-utils';
import LottoGenerator from '../classes/LottoGenerator.js';
import Lotto from '../classes/Lotto.js';
import OutputView from './OutputView.js';
import LottoBonus from '../classes/LottoBonus.js';

class InputView {
  async inputPurchasePrice() {
    try {
      const purchasePrice = await Console.readLineAsync(
        '구입금액을 입력해 주세요.\n'
      );
      return new LottoGenerator(Number(purchasePrice));
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.inputPurchasePrice();
    }
  }

  async inputWinningNumbers() {
    try {
      const winningNumbersInput = await Console.readLineAsync(
        '\n당첨 번호를 입력해 주세요.\n'
      );
      const winningNumbers = winningNumbersInput
        .split(',')
        .map((lottoNumber) => parseInt(lottoNumber));

      return new Lotto(winningNumbers);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.inputWinningNumbers();
    }
  }

  async inputBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await Console.readLineAsync(
        '\n보너스 번호를 입력해 주세요.\n'
      );

      return new LottoBonus(Number(bonusNumber), winningNumbers);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.inputBonusNumber(winningNumbers);
    }
  }
}

export default InputView;
