import { Console } from '@woowacourse/mission-utils';
import {
  getPaidMoney,
  getLottoNumbers,
  getBonusNumbers,
} from '../Utilities/InputHandler.js';
import Draw from './Draw.js';
import Lotto from './Lotto.js';
import Stats from './Stats.js';
import { calculateWinningResult } from '../Utilities/LottoCalculator.js';

class App {
  constructor() {
    this.gameState = {
      paidMoney: null,
      pickedNumbers: null,
      lottoNumbers: null,
      bonusNumber: null,
      stats: null,
    };
    this.currentStep = 0;
  }

  async run() {
    try {
      switch (this.currentStep) {
        case 0:
          await this.draw();
          this.currentStep++;
        case 1:
          await this.getLotto();
          this.currentStep++;
        case 2:
          await this.getBounsLotto();
          this.currentStep++;
        case 3:
          this.processResults();
          this.currentStep++;
        case 4:
          this.displayResults();
          this.currentStep++;
          break;
      }
    } catch (error) {
      Console.print(error.message);
      this.retryFromError();
    }
  }

  async draw() {
    this.gameState.paidMoney = await getPaidMoney();
    const draw = new Draw(this.gameState.paidMoney);
    this.gameState.pickedNumbers = draw.getPickedNumbers();
  }

  async getLotto() {
    const lotto = new Lotto(await getLottoNumbers());
    this.gameState.lottoNumbers = lotto.getNumbers();
  }

  async getBounsLotto(){
    this.gameState.bonusNumber = await getBonusNumbers(this.gameState.lottoNumbers);
  }

  processResults() {
    const { lottoNumbers, bonusNumber, pickedNumbers } = this.gameState;
    const winResult = calculateWinningResult(
      lottoNumbers,
      bonusNumber,
      pickedNumbers
    );
    this.gameState.stats = new Stats(winResult, bonusNumber);
  }

  displayResults() {
    const { stats, paidMoney } = this.gameState;
    stats.printStats();
    stats.printProfitRate(paidMoney);
  }

  retryFromError() {
    Console.print('다시 시도합니다...');
    this.run();
  }
}

export default App;
