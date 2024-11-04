import LottoGenerator from './components/Lotto/LottoGenerator.js';
import ResultCalculator from './components/ResultCalculator.js';
import StatisticCalculation from './components/StatisticCalculation.js';
import { printGeneratedList, printFinalResults } from './utils/OutputView.js';
import {
  inputBonusNumber,
  inputPurchaseAmount,
  inputWinningNumbers,
} from './utils/InputView.js';

class App {
  async run() {
    const inputMoney = await inputPurchaseAmount();
    const lottoList = LottoGenerator(inputMoney);
    printGeneratedList(lottoList);
    const winningNumbers = await inputWinningNumbers();
    const bonusNumber = await inputBonusNumber(winningNumbers);
    const resultCalculator = new ResultCalculator(winningNumbers, bonusNumber);
    const prizes = resultCalculator.calculatePrizes(lottoList);
    const statistics = StatisticCalculation(prizes, inputMoney);
    printFinalResults(statistics);
  }
}

export default App;
