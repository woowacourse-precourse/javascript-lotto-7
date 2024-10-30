import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import parser from '../utils/parser.js';
import LottoCount from '../domain/LottoCount.js';
import Lotto from '../domain/Lotto.js';
import Bonus from '../domain/Bonus.js';

class LottoController {
  async start() {
    const lottoCount = await this.#inputLottoPurchasePrice();
    OutputView.printLottoPurchaseCount(lottoCount);

    const winningNumber = await this.#inputWinningNumber();
    const bonusNumber = await this.#inputBonusNumber();
  }

  async #inputLottoPurchasePrice() {
    try {
      const lottoPurchasePrice = await InputView.readLottoPurchasePriceAsync();
      const parsePurchasePrice = parser.parseStringToNumber(lottoPurchasePrice);

      const lottoCount = new LottoCount(parsePurchasePrice);
      return lottoCount.getLottoCount();
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#inputLottoPurchasePrice();
    }
  }

  async #inputWinningNumber() {
    try {
      const winningNumber = await InputView.readWinningNumberAsync();
      const parseNumbers = parser.parseExtractNumbers(winningNumber);

      const lotto = new Lotto(parseNumbers);
      return lotto.getLottoNumbers();
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#inputWinningNumber();
    }
  }

  async #inputBonusNumber() {
    try {
      const bonusNumber = await InputView.readBonusNumberAsnyc();
      const parseBonusNumber = parser.parseStringToNumber(bonusNumber);

      const bonus = new Bonus(parseBonusNumber);
      return bonus.getBonusNumber();
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#inputBonusNumber();
    }
  }


}

export default LottoController;
