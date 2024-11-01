import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils"; // 외부 라이브러리 나중

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    Console.print("");

    const { lottoCount, lottoArr } = Lotto.createLotto(purchaseAmount);
    this.printLottoResults(lottoCount, lottoArr);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber();
  }

  async getPurchaseAmount() {
    Console.print("구입금액을 입력해 주세요.");
    const inputPurchase = await Console.readLineAsync("");

    const amount = Number(inputPurchase);
    this.validateAmount(amount);
    return amount;
  }

  validateAmount(amount) {
    if (isNaN(amount)) {
      throw new Error("[ERROR] 금액은 숫자여야 합니다.");
    }
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.");
    }
    if (amount <= 0) {
      throw new Error("[ERROR] 정상적인 금액을 입력해주세요.");
    }
  }

  printLottoResults(lottoCount, lottoArr) {
    Console.print(`${lottoCount}개를 구매했습니다.`);
    lottoArr.forEach((lotto) => {
      Console.print(`[${lotto.numbers.join(", ")}]`);
    });
    Console.print("");
  }
  async getWinningNumbers() {
    Console.print("당첨 번호를 입력해 주세요.");
    const winningNumbersInput = await Console.readLineAsync("");
    const winningNumbersArr = winningNumbersInput.split(",").map(Number);
    this.validateWinningNumbers(winningNumbersArr);

    Console.print("");
    return winningNumbersArr;
  }

  async getBonusNumber() {
    Console.print("보너스 번호를 입력해 주세요.");
    const bonusNumberInput = await Console.readLineAsync("");
    Console.print("");
    return Number(bonusNumberInput);
  }

  validateWinningNumbers(winningNumbers) {
    const uniqueNumbers = new Set(winningNumbers);
    if (isNaN(amount)) {
      throw new Error("[ERROR] 금액은 숫자여야 합니다.");
    }
    if (uniqueNumbers.size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 포함되어 있습니다.");
    }

    winningNumbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 숫자는 1에서 45 사이여야 합니다.");
      }
    });
  }
}
export default App;
