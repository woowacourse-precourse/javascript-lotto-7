import { Console } from "@woowacourse/mission-utils";
import LotteryMachine from "./LotteryMachine.js";
import PrizeCalculator from "./PrizeCalculator.js";

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    if (!purchaseAmount) return;

    const lotteryMachine = new LotteryMachine(purchaseAmount);
    const tickets = lotteryMachine.generateLottoTickets();

    const winningNumbers = await this.getWinningNumbers();
    if (!winningNumbers) return;

    const bonusNumber = await this.getBonusNumber();
    if (bonusNumber === undefined) return;
  }

  async getPurchaseAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.");
    const amount = parseInt(input);
    if (isNaN(amount) || amount % 1000 !== 0 || amount <= 0) {
      Console.print("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
      return null;
    }
    return amount;
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
    const numbers = input.split(",").map(Number);
    if (
      numbers.length !== 6 ||
      new Set(numbers).size !== 6 ||
      numbers.some((num) => num < 1 || num > 45)
    ) {
      Console.print("[ERROR] 당첨 번호는 중복되지 않은 6개의 숫자여야 합니다.");
      return null;
    }
    return numbers;
  }

  async getBonusNumber() {
    const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
    const number = parseInt(input);
    if (isNaN(number) || number < 1 || number > 45) {
      Console.print("[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.");
      return null;
    }
    return number;
  }
}

export default App;
