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

      if (isNaN(number) == false 
          && !this.answerNumbers.includes(number) 
          && number >= 1 && number <= 45) {
        this.bonusNumber = number;
        return;
      }
      MissionUtils.Console.print("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  calculateLottoResults() {
    this.lottos.forEach((lotto) => {
      const isBonus = lotto.getNumbers().includes(this.bonusNumber);
      const matchCount = lotto.getNumbers().filter((num) => 
        this.answerNumbers.includes(num)).length;   

      if (matchCount === 6) this.result.first += 1;
      else if (matchCount === 5 && isBonus) this.result.second += 1;
      else if (matchCount === 5) this.result.third += 1;
      else if (matchCount === 4) this.result.fourth += 1;
      else if (matchCount === 3) this.result.fifth += 1; 
    });
  }

  printResults(moneyAmount) {
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.result.fifth}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.result.fourth}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.result.third}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result.second}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.result.first}개`);

    const totalPrize = this.result.first * 2000000000 +
                       this.result.second * 30000000 +
                       this.result.third * 1500000 +
                       this.result.fourth * 50000 +
                       this.result.fifth * 5000;

    const totalProfit = ((totalPrize / moneyAmount) * 100).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${totalProfit}%입니다.`);
  }
}

export default App;
