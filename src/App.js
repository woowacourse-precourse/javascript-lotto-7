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
      this.makeLottos(lottoCount);
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
    while (true) {
      MissionUtils.Console.print("구입금액을 입력해 주세요.\n");
      const input = await MissionUtils.Console.readLineAsync();
      const amount = parseInt(input, 10);

      if (isNaN(amount) == false && amount % 1000 === 0) {
        return amount;
      }
    }

    MissionUtils.Console.print("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
  }

  calculateLottoCount(moneyAmount) {
    return Math.floor(amount / 1000);
  }

  makeLottos(lottoCount) {
    this.lottos = Array.from({ length: count}, () => {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        return new Lotto(numbers);
    });
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
