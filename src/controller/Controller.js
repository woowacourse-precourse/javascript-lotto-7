import InputView from '../view/InputView.js';
import LottoPurchasePriceValidations from '../validations/LottoPurchasePriceValidations.js';
import parser from '../utils/parser.js';
import OutputView from '../view/OutputView.js';

class Controller {
  async start() {
    const lottoCount = await this.#inputLottoPurchasePrice();
    OutputView.printLottoIssueDetails(lottoCount);

    // const winningNumber = await InputView.readWinningNumber();
    // const bonusNumber = await InputView.readBonusNumber();
  }

  async #inputLottoPurchasePrice() {
    try {
      const lottoPurchasePrice = await InputView.readLottoPurchasePrice();
      const parsePurchasePrice = parser.parseStringToNumber(lottoPurchasePrice);

      LottoPurchasePriceValidations(parsePurchasePrice);
      return parser.parseMoneyToLottoCount(parsePurchasePrice);

    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#inputLottoPurchasePrice();
    }
  }
}

export default Controller;
