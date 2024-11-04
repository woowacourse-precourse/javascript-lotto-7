// App.js
import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    try {
      const purchaseAmount = await this.getInput("구입금액을 입력해 주세요.\n");
      this.validatePurchaseAmount(purchaseAmount);

      const lottoCount = Math.floor(purchaseAmount / 1000);
      const lottos = this.generateLottos(lottoCount);
      Console.print(`\n${lottoCount}개를 구매했습니다.`);
      lottos.forEach((lotto) => Console.print(`[${lotto.getNumbers().join(", ")}]`));

      const winningNumbers = await this.getInput("\n당첨 번호를 입력해 주세요.\n");
      const bonusNumber = await this.getInput("\n보너스 번호를 입력해 주세요.\n");

      const parsedWinningNumbers = this.parseNumbers(winningNumbers);
      const parsedBonusNumber = parseInt(bonusNumber, 10);
      this.validateBonusNumber(parsedBonusNumber);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  getInput(message) {
    return new Promise((resolve) => {
      Console.readLineAsync(message).then((input) => {
        resolve(input.trim());
      });
    });
  }

  validatePurchaseAmount(amount) {
    const parsedAmount = parseInt(amount, 10);
    if (isNaN(parsedAmount) || parsedAmount % 1000 !== 0) {
      throw new Error("구입 금액은 1,000원 단위로 입력해야 합니다.");
    }
  }

  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      lottos.push(new Lotto(numbers));
    }
    return lottos;
  }

  parseNumbers(numbers) {
    const parsedNumbers = numbers.split(",").map((num) => parseInt(num.trim(), 10));
    if (
      parsedNumbers.length !== 6 ||
      parsedNumbers.some((num) => isNaN(num) || num < 1 || num > 45)
    ) {
      throw new Error("로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    return parsedNumbers;
  }

  validateBonusNumber(number) {
    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error("보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }
}

export default App;
