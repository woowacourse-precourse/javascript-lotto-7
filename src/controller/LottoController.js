import InputView from '../view/InputView.js';
import LottoPurchasePriceValidations from '../validations/LottoPurchasePriceValidations.js';
import BonusNumberValidations from '../validations/BonusNumberValidations.js';
import parser from '../utils/parser.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../domain/Lotto.js';

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

  async #inputBonusNumber() {
    try {
      const bonusNumber = await InputView.readBonusNumberAsnyc();
      const parseBonusNumber = parser.parseStringToNumber(bonusNumber);

      BonusNumberValidations(parseBonusNumber);
      return bonusNumber;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#inputBonusNumber();
    }
  }
}

export default LottoController;
