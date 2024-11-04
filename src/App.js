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
    MissionUtils.Console.print(`${this.lottos.length}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  async getAnswerNumbers() {
    while (true) {
       MissionUtils.Console.print("당첨 번호를 입력해 주세요.\n");
       const input = await MissionUtils.Console.readLineAsync();
       const numbers = input.split(",").map(Number);

       if (this.validateWinningNumbers(numbers)) {
        this.answerNumbers = numbers;
        return;
       }
       MissionUtils.Console.print("[ERROR] 당첨 번호는 1부터 45 사이의 중복되지 않는 6개의 숫자여야 합니다.");
    }
  }

  async getBonusNumber() {
    while (true) {
      MissionUtils.Console.print("보너스 번호를 입력해 주세요.\n");
      const input = await MissionUtils.Console.readLineAsync();
      const number = parseInt(input, 10);

      if (isNaN(number) == false && !this.answerNumbers.includes(number) && number >= 1 && number <= 45) {
        this.bonusNumber = number;
        return;
      }
      MissionUtils.Console.print("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  calculateLottoResults() {
  }

  printResults(moneyAmount) {
  }
}

export default App;
