import Input from "./utils/Input.js";
import Lotto from "./Lotto.js";
import LottoGenerator from "./utils/LottoGenerator.js";
import Output from "./utils/Output.js";
import Validator from "./utils/Validator.js";
import LottoCalculator from "./utils/LottoCalculator.js";
import { ERROR_MESSAGES } from "./constants/constants.js";

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const lottoTickets = this.generateLottoTickets(purchaseAmount);
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    const result = LottoCalculator.calculateResults(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );
    this.printResults(result, purchaseAmount);
  }

  async getPurchaseAmount() {
    let purchaseAmount;
    while (true) {
      try {
        purchaseAmount = await Input.purchaseAmount();
        Validator.isNumber(purchaseAmount);
        Validator.isAboveMinimum(purchaseAmount);
        Validator.isThousandUnit(purchaseAmount);
        break;
      } catch (error) {
        Output.printError(error.message);
      }
    }
    return purchaseAmount;
  }

  generateLottoTickets(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;
    const lottoTickets = LottoGenerator.generateTickets(lottoCount);
    Output.printCountOfLotto(lottoCount);
    Output.printLotto(lottoTickets);
    return lottoTickets;
  }

  async getWinningNumbers() {
    let winningNumbers;
    while (true) {
      try {
        const winningNumbersInput = await Input.winningNumbers();
        const lotto = new Lotto(winningNumbersInput);
        winningNumbers = lotto.getNumbers();
        break;
      } catch (error) {
        Output.printError(error.message);
      }
    }
    return winningNumbers;
  }

  async getBonusNumber(winningNumbers) {
    let bonusNumber;
    while (true) {
      try {
        bonusNumber = await Input.bonusNumber();
        Validator.isSingleNumber(bonusNumber);
        Validator.isNumber(bonusNumber, ERROR_MESSAGES.BONUS_NUMBER_NAN);
        Validator.isWithinRange(bonusNumber, 1, 45);
        Validator.isUniqueBonusNumber(bonusNumber, winningNumbers);
        break;
      } catch (error) {
        Output.printError(error.message);
      }
    }
    return Number(bonusNumber);
  }

  printResults(result, purchaseAmount) {
    Output.printResults(result);
    const profitRate = LottoCalculator.calculateProfitRate(
      result,
      purchaseAmount
    );
    Output.printProfitRate(profitRate);
  }
}

export default App;
