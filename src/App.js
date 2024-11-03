import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.results = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
    };
  }
  async run() {
    this.purchaseAmount = await this.getPurchaseAmount();
    const lottoCount = this.purchaseAmount / 1000;
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    this.lottos = this.generateLottos(lottoCount);
    this.printLottoNumbers(this.lottos);
    this.winningNumbers = await this.getWinningNumbers();
    this.bonusNumber = await this.getBonusNumber();
    this.calculateLotteryResults();
    this.printLotteryResults();
  }

  async getPurchaseAmount() {
    let amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    amount = Number(amount);

    if (Number.isNaN(amount) || amount <= 0 || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위의 숫자여야 합니다.");
    }
    return amount;
  }

  generateLottos(count) {
    return Array.from({ length: count }, () => {
      return new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6).sort(
          (a, b) => a - b
      ))
    });
  }

  printLottoNumbers(lottos) {
    this.lottos.forEach((lotto) => {
      lotto.printNumbers()
    });
    
  }

  async getWinningNumbers() {
    let getNumbers = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    
    if (getNumbers.trim() === '' || getNumbers.endsWith(',')) {
      throw new Error("[ERROR] 올바른 형식으로 당첨 번호를 입력해 주세요.");
    }
  
    let winNumbers = getNumbers.split(",").map((number) => {
      const num = Number(number.trim());
      if (Number.isNaN(num) || num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자를 6개 입력해야합니다.");
      }
      return num;
    });
  
    const uniqueNumbers = new Set(winNumbers);
    if (uniqueNumbers.size !== winNumbers.length) {
      throw new Error("[ERROR] 중복된 번호는 입력할 수 없습니다.");
    }
  
    if (winNumbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개를 입력해야합니다.");
    }
  
    return winNumbers;
  }

  async getBonusNumber() {
    let bonusNumber = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    bonusNumber = Number(bonusNumber);
    if (Number.isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 한개의 숫자여야 합니다.");
    }
    if (this.winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.");
    }
    return bonusNumber;
  }

  calculateLotteryResults() {
    this.lottos.forEach((lotto) => {
      let matchCount = lotto.matchNumbers(this.winningNumbers);
      let matchBonus = lotto.matchBonusNumber(this.bonusNumber);
      if (matchCount === 3) {
        this.results[3]++;
      }
      if (matchCount === 4) {
        this.results[4]++;
      }
      if (matchCount === 5) {
        if (matchBonus) {
          this.results[5.5]++;
        }
        if (!matchBonus) {
          this.results[5]++;
        }
      }
      if (matchCount === 6) {
        this.results[6]++;
      }
    });
  }

  printLotteryResults() {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${this.results[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.results[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.results[5.5]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.results[6]}개`);

    const totalPrize =
      this.results[3] * 5000 +
      this.results[4] * 50000 +
      this.results[5] * 1500000 +
      this.results[5.5] * 30000000 +
      this.results[6] * 2000000000;

    const profitRate = ((totalPrize / this.purchaseAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}



export default App;