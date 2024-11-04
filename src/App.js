import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto';

class App {
  constructor() {
    this.lottos = [];
    this.answerNumbers = [];
    this.bonusNumber = null;
    this.result = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  async run() {
    try {
      const moneyAmount = await this.getMoneyAmount();
      const lottoCount = this.calculateLottoCount(moneyAmount);
      this.printLottos();
      await this.getAnswerNumbers();
      await this.getBonusNumber();
      this.calculateLottoResults();
      this.printResults(moneyAmount);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  async getMoneyAmount() {
  };

  calculateLottoCount(moneyAmount) {
  }

  printLottos(){
  }

  async getAnswerNumbers() {
  }

  async getBonusNumber() {
  }

  calculateLottoResults() {
  }

  printResults(moneyAmount) {
  }
}

export default App;
