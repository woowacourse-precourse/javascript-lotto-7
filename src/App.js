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

    Console.print("");
    const winningNumbers = await this.getWinningNumbers();

    Console.print("");
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    const lottoResult = [0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < lottoInstances.length; i++) {
      lottoResult[
        lottoInstances[i].checkWinStatus(winningNumbers, bonusNumber)
      ]++;
    }

    Console.print("");
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${lottoResult[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoResult[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoResult[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult[7]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${lottoResult[6]}개`);

    const prizeAmount =
      5000 * lottoResult[3] +
      50000 * lottoResult[4] +
      1500000 * lottoResult[5] +
      30000000 * lottoResult[7] +
      2000000000 * lottoResult[6];

    const profit = prizeAmount - purchaseAmount;
    const roi = ((profit / purchaseAmount) * 100).toFixed(1); // ROI(수익률)를 소수점 한 자리까지 표시
    Console.print(`총 수익률은 ${roi}%입니다.`);
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

  async getBonusNumber(winningNumbers) {
    while (true) {
      try {
        Console.print("보너스 번호를 입력해 주세요.");
        const input = await Console.readLineAsync("");
        return LottoInputValidator.validateBonusNumber(input, winningNumbers);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
