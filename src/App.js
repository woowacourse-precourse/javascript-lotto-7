import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.lottos = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
  }

  async run() {
    const amount = await this.promptPurchaseAmount();
    const count = amount / 1000;
    Console.print(`${count}개를 구매했습니다.`);
    this.generateLottos(count);
    this.printLottos();
    await this.inputWinningNumbers();
    await this.inputBonusNumber();
    // 이후 기능은 아직 구현되지 않았습니다.
  }

  async promptPurchaseAmount() {
    try {
      const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      const amount = Number(input);
      if (!Number.isInteger(amount) || amount % 1000 !== 0 || amount <= 0) {
        throw new Error("[ERROR] 구입 금액은 1,000원 단위의 양의 정수여야 합니다.");
      }
      return amount;
    } catch (error) {
      Console.print(error.message);
      return this.promptPurchaseAmount();
    }
  }

  generateLottos(count) {
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto);
    }
  }

  printLottos() {
    this.lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      Console.print(`[${numbers.join(", ")}]`);
    });
  }

  async inputWinningNumbers() {
    try {
      const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
      const numbers = input
        .split(",")
        .map((num) => Number(num.trim()))
        .sort((a, b) => a - b);
      new Lotto(numbers); // 유효성 검사를 위해 Lotto 인스턴스 생성
      this.winningNumbers = numbers;
    } catch (error) {
      Console.print(error.message);
      return this.inputWinningNumbers();
    }
  }

  async inputBonusNumber() {
    try {
      const input = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
      const bonus = Number(input);
      if (
        !Number.isInteger(bonus) ||
        bonus < 1 ||
        bonus > 45 ||
        this.winningNumbers.includes(bonus)
      ) {
        throw new Error(
          "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1부터 45 사이의 숫자여야 합니다."
        );
      }
      this.bonusNumber = bonus;
    } catch (error) {
      Console.print(error.message);
      return this.inputBonusNumber();
    }
  }
}

export default App;
