import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import parser from '../utils/parser.js';
import LottoCount from '../domain/LottoCount.js';
import Lotto from '../domain/Lotto.js';
import Bonus from '../domain/Bonus.js';
import LottoIssuance from '../domain/LottoIssuance.js';

class LottoController {
  #lottoCount;
  #winningNumbers;
  #bonusNumber;
  #lottos;

  async start() {
    this.#lottoCount = await this.#inputLottoPurchasePrice();
    OutputView.printLottoPurchaseCount(this.#lottoCount);

    const lottoIssuance = new LottoIssuance(this.#lottoCount);
    this.#lottos = lottoIssuance.getIssuedLottos();
    this.#lottos.forEach((lotto) => {
      OutputView.printLottoIssueDetails(lotto);
    });

    this.#winningNumbers = await this.#inputWinningNumbers();
    this.#bonusNumber = await this.#inputBonusNumber();
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

  async #inputWinningNumbers() {
    try {
      const winningNumbers = await InputView.readWinningNumbersAsync();
      const parseNumbers = parser.parseExtractNumbers(winningNumbers);

      const lotto = new Lotto(parseNumbers);
      return lotto.getLottoNumbers();
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#inputWinningNumbers();
    }
  }

  async #inputBonusNumber() {
    try {
      const bonusNumber = await InputView.readBonusNumberAsnyc();
      const parseBonusNumber = parser.parseStringToNumber(bonusNumber);

      const bonus = new Bonus(parseBonusNumber, this.#winningNumbers);
      return bonus.getBonusNumber();
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return await this.#inputBonusNumber();
    }
  }


}

export default LottoController;
