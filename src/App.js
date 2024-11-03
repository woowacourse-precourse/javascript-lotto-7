import LottoBundle from './LottoBundle.js';
import Statistic from './Statistic.js';
import checkAllLotto from './Utils/checkAllLotto.js';
import LoopWhileValid from './Views/LoopWhileValid.js';
import OutputPrint from './Views/OutputPrint.js';

class App {
  async run() {
    const buyPrice = await LoopWhileValid.getBuyPrice();
    const lottoBundle = new LottoBundle(buyPrice / 1000);
    const statistic = new Statistic(buyPrice);

    OutputPrint.lottoBundleNumbers(lottoBundle);

    const basicNumbers = await LoopWhileValid.getBasicNumbers();
    const bonusNumber = await LoopWhileValid.getBonusNumbers(basicNumbers);

    checkAllLotto(lottoBundle, basicNumbers, bonusNumber, statistic);

    OutputPrint.statistic(statistic);
  }
}

export default App;
