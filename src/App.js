import { Console } from '@woowacourse/mission-utils';
import {
  getPaidMoney,
  getLottoNumbers,
  getBonusNumbers,
} from './InputHandler.js';
import Draw from './Draw.js';
import Lotto from './Lotto.js';
import Stats from './Stats.js';
import { calculateWinningResult } from './LottoCalculator.js';

class App {
  async run() {
    try {
      const gameData = await this.initializeGame();
      const stats = this.processResults(gameData);
      this.displayResults(stats, gameData.paidMoney);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async initializeGame() {
    const paidMoney = await getPaidMoney();
    const draw = new Draw(paidMoney);
    const pickedNumbers = draw.getPickedNumbers();
    const lotto = new Lotto(await getLottoNumbers());
    const lottoNumbers = lotto.getNumbers();
    const bonusNumber = await getBonusNumbers(lottoNumbers);

    return {paidMoney,pickedNumbers, lottoNumbers,bonusNumber };
  }

  processResults({lottoNumbers,bonusNumber,pickedNumbers}){
    const winResult = calculateWinningResult(
      lottoNumbers,
      bonusNumber,
      pickedNumbers
    );
    return new Stats(winResult, bonusNumber);
  }

  displayResults(stats, paidMoney){
    stats.printStats();
    stats.printProfitRate(paidMoney);
  }
}

export default App;
