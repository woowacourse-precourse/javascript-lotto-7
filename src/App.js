import { Console } from "@woowacourse/mission-utils";
import { LottoInputValidator } from "./validators.js";
import { createLottoInstances } from "./CreateLotto.js";
class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();

    Console.print("");
    Console.print(`${purchaseAmount / 1000}개를 구매했습니다.`);
    const lottoInstances = createLottoInstances(purchaseAmount / 1000);

    // 로또 번호 출력
    for (let i = 0; i < lottoInstances.length; i++) {
      lottoInstances[i].showNumber();
    }

    const winningNumbers = await this.getWinningNumbers();

    Console.print("");
    Console.print("보너스 번호를 입력해 주세요.");
    const bonusInput = await Console.readLineAsync("");
    const bonusNumber = LottoInputValidator.validateBonusNumber(
      bonusInput,
      winningNumbers
    );
  }

  async getPurchaseAmount() {
    while (true) {
      try {
        Console.print("구입금액을 입력해 주세요.");
        const input = await Console.readLineAsync("");
        return LottoInputValidator.validatePurchaseAmount(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getWinningNumbers() {
    while (true) {
      try {
        Console.print("당첨 번호를 입력해 주세요.");
        const input = await Console.readLineAsync("");
        return LottoInputValidator.validateWinningNumbers(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
