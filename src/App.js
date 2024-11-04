import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.lottos = [];
    this.winningNumbers = [];
    this.bonusNumber = null;
  }

  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const lottoCount = this.calculateLottoCount(purchaseAmount);
    this.generateLottos(lottoCount);
    this.printLottos();

    await this.getWinningNumbers();
    await this.getBonusNumber();

  }

  async getPurchaseAmount() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n", (input) => {
        const amount = parseInt(input, 10);
        if (isNaN(amount) || amount % 1000 !== 0) {
          throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
        }
        resolve(amount);
      });
    });
  }

  calculateLottoCount(amount) {
    return Math.floor(amount / 1000);
  }

  generateLottos(count) {
    this.lottos = Array.from({ length: count }, () => {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(numbers);
    });
  }

  printLottos() {
    MissionUtils.Console.print(`${this.lottos.length}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  async getWinningNumbers() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n", (input) => {
        const numbers = input.split(",").map(Number);
        if (!this.validateWinningNumbers(numbers)) {
          throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 중복되지 않는 6개의 숫자여야 합니다.");
        }
        this.winningNumbers = numbers;
        resolve();
      });
    });
  }

  async getBonusNumber() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n", (input) => {
        const number = parseInt(input, 10);
        if (isNaN(number) || number < 1 || number > 45 || this.winningNumbers.includes(number)) {
          throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1부터 45 사이의 숫자여야 합니다.");
        }
        this.bonusNumber = number;
        resolve();
      });
    });
  }

  validateWinningNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    return (
      numbers.length === 6 &&
      numbers.every((num) => num >= 1 && num <= 45) &&
      uniqueNumbers.size === numbers.length
    );
  }
  
}

export default App;
