import LottoBundle from './Model/LottoBundle.js';
import Statistic from './Model/Statistic.js';
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
  }
}

export default App;
