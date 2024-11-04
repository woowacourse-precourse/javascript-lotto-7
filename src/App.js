import LottoMachine from './LottoMachine.js';
import LottoPrinter from './LottoPrinter.js';
import validatePrice from './utils/validate/validatePrice.js';
import validateWinningNumber from './utils/validate/validateWinningNumber.js';
import validateBonusNumber from './utils/validate/validateBonusNumber.js';
import calculateTotalReturn from './utils/calculateTotalReturn.js';

class App {
  async run() {
    const price = await validatePrice();
    const lottoMachine = new LottoMachine(price);
    lottoMachine.generateLottoNumbers();
    LottoPrinter.lottoNumbers(lottoMachine.getLottoNumbers());

    const lottoNumbers = await validateWinningNumber();
    const bonusNumber = await validateBonusNumber(lottoNumbers);
    lottoMachine.checkLottoNumbers(lottoNumbers, bonusNumber);

    LottoPrinter.winningCount(lottoMachine.getWinningCount());
    LottoPrinter.totalReturn(
      calculateTotalReturn(lottoMachine.getWinningCount(), price)
    );
  }
}

export default App;
