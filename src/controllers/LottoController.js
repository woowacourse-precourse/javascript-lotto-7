import Money from '../models/Money.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class LottoController {
  #lottoCount;

  async run() {
    await this.getLottoCount();
  }

  async getLottoCount() {
    const moneyInput = await InputView.readLineAsync('구입금액을 입력해 주세요.\n');
    this.#lottoCount = new Money(moneyInput).calculateLottoCount();
    OutputView.printNewLine();
    OutputView.printLottoCount(this.#lottoCount);
  }
}

export default LottoController;
