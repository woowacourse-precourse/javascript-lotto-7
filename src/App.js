import LottoGenerator from './components/Lotto/LottoGenerator.js';
import ResultCalculator from './components/ResultCalculator.js';
import printGeneratedList from './utils/OutputView.js';

class App {
  async run() {
    const inputMoney = 8000; // 가정
    const lottoList = LottoGenerator(inputMoney);
    printGeneratedList(lottoList);
    const winningNumbers = [1, 2, 3, 4, 5, 6]; // 가정
    const bonusNumber = [7]; // 가정
    const resultCalculator = new ResultCalculator(winningNumbers, bonusNumber);
    const prizes = resultCalculator.calculatePrizes(lottoList);
      bonusNumber,
    );
    resultCalculator.calculatePrizes(lottoList);
  }
}

export default App;
