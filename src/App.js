import { Console } from "@woowacourse/mission-utils";
import LottoMachine from "./LottoMachine.js";
import LottoResult from "./LottoResult.js";

class App {
  constructor() {
    this.lottoMachine = new LottoMachine();
    this.lottoResults = [];
    this.prizeCounts = [0, 0, 0, 0, 0, 0]; // [3개, 4개, 5개, 5개+보너스, 6개, 꽝]
  }

async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    this.lottoResults = this.generateLottos(purchaseAmount);
    this.printLottoResults();

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber();

    this.calculatePrizes(winningNumbers, bonusNumber);
    
    this.printPrizeStatistics(purchaseAmount);
  }


  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const parsedAmount = parseInt(purchaseAmount, 10);
    if (isNaN(parsedAmount) || parsedAmount <= 0 || parsedAmount % 1000 !== 0) {
      Console.print("[ERROR] 유효한 금액을 입력해야 합니다.");
      return this.getPurchaseAmount();
    }
    return parsedAmount;
  }

  generateLottos(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      lottos.push(this.lottoMachine.generateLotto());
    }
    return lottos;
  }

  printLottoResults() {
    Console.print(`${this.lottoResults.length}개를 구매했습니다.`);
    this.lottoResults.forEach(lotto => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  async getWinningNumbers() {
    const winningNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const numbers = winningNumbers.split(',').map(Number);
    if (numbers.length !== 6 || new Set(numbers).size !== 6) {
      Console.print("[ERROR] 당첨 번호는 6개여야 하며 중복될 수 없습니다.");
      return this.getWinningNumbers();
    }
    return numbers;
  }
  
  async getBonusNumber() {
    const bonusNumberInput = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    const bonusNumber = parseInt(bonusNumberInput, 10);
    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      Console.print("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
      return this.getBonusNumber();
    }
    return bonusNumber;
  }

  calculatePrizes(winningNumbers, bonusNumber) {
    const lottoResult = new LottoResult(winningNumbers, bonusNumber);
    this.lottoResults.forEach(lotto => {
      const prize = lottoResult.getPrize(lotto);
      this.prizeCounts[prize.rank] += 1;
    });
  }

  printPrizeStatistics(purchaseAmount) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${this.prizeCounts[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.prizeCounts[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.prizeCounts[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.prizeCounts[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.prizeCounts[4]}개`);
    Console.print(`꽝 - ${this.prizeCounts[5]}개`);

    const totalPrize = this.prizeCounts.reduce((sum, count, index) => {
      const prizeMoney = index === 4 ? 2000000000 :
                        index === 3 ? 30000000 :
                        index === 2 ? 1500000 :
                        index === 1 ? 50000 :
                        index === 0 ? 5000 : 0;
      return sum + count * prizeMoney;
    }, 0);

    const profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
}

}

export default App;
