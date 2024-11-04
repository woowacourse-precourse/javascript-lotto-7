import Lotto from "./Lotto.js";
import LottoAmount from "./model/LottoAmount.js";
import LottoBonus from "./model/LottoBonus.js";
import LottoResultCalculator from "./model/LottoResultCalculator.js";
import LottoNumbersGenerator from "./model/LottoNumbersGenerator.js";
import { LOTTO_AMOUNT_UNIT } from "./config/numberConfig.js";
import { splitNumbers } from "./util/util.js";
import InputView from "./view/inputView.js";
import OutputView from "./view/outputView.js";

class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();
    let lottoAmount;
    let lottoWinningNumbers;
    let lottoBonusNumber;

    while (true) {
      try {
        const lottoAmountString = await inputView.inputLottoAmount();
        lottoAmount = this.validateAmount(lottoAmountString);
        break;
      } catch (error) {
        outputView.outputError(error.message);
      }
    }

    const lottoQuantity = lottoAmount / LOTTO_AMOUNT_UNIT;
    const numberGenerator = new LottoNumbersGenerator();
    const allRandomNumbers = numberGenerator.printLottoNumbers(lottoQuantity);
    outputView.outputLottoNumbers(lottoQuantity, allRandomNumbers);

    while (true) {
      try {
        const winningNumberInput = await inputView.inputWinningNumbers();
        lottoWinningNumbers = this.validateWinningNumbers(winningNumberInput);
        break;
      } catch (error) {
        outputView.outputError(error.message);
      }
    }
    console.log(lottoWinningNumbers);

    while (true) {
      try {
        const bonusNumberInput = await inputView.inputBonusNumber();
        lottoBonusNumber = this.validateBonusNumber(
          bonusNumberInput,
          lottoWinningNumbers
        );
        break;
      } catch (error) {
        outputView.outputError(error.message);
      }
    }

    const resultCalculator = new LottoResultCalculator();
    const rankCounts = resultCalculator.calculateWinningRank(
      allRandomNumbers,
      lottoWinningNumbers,
      lottoBonusNumber
    );
    const profitRate = resultCalculator.calculateProfitRate(
      lottoAmount,
      rankCounts
    );
    const lottoResultPrinter = outputView.outputLottoResult(
      rankCounts,
      profitRate
    );
  }

  validateAmount(lottoAmountString) {
    const lottoAmount = new LottoAmount(Number(lottoAmountString));
    return lottoAmount.getAmount();
  }

  validateWinningNumbers(winningNumberInput) {
    const winningNumbers = new Lotto(splitNumbers(winningNumberInput));
    return winningNumbers.getWinningNumbers();
  }

  validateBonusNumber(bonusNumberInput, winningNumbers) {
    const bonusNumber = new LottoBonus(
      Number(bonusNumberInput),
      winningNumbers
    );
    return bonusNumber.getBonusNumber();
  }
}

export default App;
