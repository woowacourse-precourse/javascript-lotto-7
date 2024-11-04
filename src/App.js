import { Console } from '@woowacourse/mission-utils';
import { getPaidMoney,getLottoNumbers,getBonusNumbers } from './Utilities/InputHandler.js';
import Draw from './Components/Draw.js';
import Lotto from './Components/Lotto.js';
import Stats from './Components/Stats.js';
import { calculateWinningResult } from './Utilities/LottoCalculator.js';

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
    const steps = [
      this.draw.bind(this),
      this.getLotto.bind(this),
      this.getBonusLotto.bind(this),
      this.processResults.bind(this),
      this.displayResults.bind(this)
    ];

    while (this.currentStep < steps.length) {
      try {
        await steps[this.currentStep]();
        this.currentStep++;
      } catch (error) {
        Console.print(error.message);
        await this.retryFromError();
      }
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

  async getBonusLotto(){
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

  async retryFromError() {
    Console.print('다시 시도합니다...');
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1초 대기
  }
}

export default App;