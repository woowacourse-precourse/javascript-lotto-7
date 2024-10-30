import InputView from '../view/InputView.js';
import LottoPurchasePriceValidations from '../validations/LottoPurchasePriceValidations.js';
import parser from '../utils/parser.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../domain/Lotto.js';

class Controller {
  async start() {
    const lottoCount = await this.#inputLottoPurchasePrice();
    OutputView.printLottoIssueDetails(lottoCount);

    const winningNumber = await this.#inputWinningNumber();
    // const bonusNumber = await InputView.readBonusNumberAsnyc();
  }

  async #inputLottoPurchasePrice() {
    try {
      const lottoPurchasePrice = await InputView.readLottoPurchasePriceAsync();
      const parsePurchasePrice = parser.parseStringToNumber(lottoPurchasePrice);

      LottoPurchasePriceValidations(parsePurchasePrice);
      return parser.parseMoneyToLottoCount(parsePurchasePrice);

    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#inputLottoPurchasePrice();
    }
  }

  async #inputWinningNumber() {
    try {
      const winningNumber = await InputView.readWinningNumberAsync();
      const parseNumbers = parser.parseExtractNumbers(winningNumber);
      return new Lotto(parseNumbers);
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#inputWinningNumber();
    }
  }
}

export default Controller;
