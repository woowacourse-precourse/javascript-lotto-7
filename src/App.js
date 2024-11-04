import { Console } from "@woowacourse/mission-utils";
import { LottoInputValidator } from "./validators.js";
import { createLottoInstances } from "./CreateLotto.js";
class App {
  async run() {
    // 시작 문구를 출력, 로또 구입 금액 입력
    const purchaseAmount = await this.getPurchaseAmount();

    Console.print("");
    Console.print(`${purchaseAmount / 1000}개를 구매했습니다.`); // 로또 수량 출력

    // 로또 발행
    const lottoInstances = createLottoInstances(purchaseAmount / 1000);

    // 발행된 로또 번호 출력
    for (let i = 0; i < lottoInstances.length; i++) {
      lottoInstances[i].showNumber();
    }

    Console.print("");
    // 로또 당첨 번호 입력
    const winningNumbers = await this.getWinningNumbers();

    Console.print("");
    // 보너스 번호 입력
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    const lottoResult = [0, 0, 0, 0, 0, 0, 0, 0];

    // 당첨 확인
    for (let i = 0; i < lottoInstances.length; i++) {
      lottoResult[
        lottoInstances[i].checkWinStatus(winningNumbers, bonusNumber)
      ]++;
    }

    // 당첨 통계 출력
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
      5000 * lottoResult[3] + // 3개 일치
      50000 * lottoResult[4] + // 4개 일치
      1500000 * lottoResult[5] + // 5개 일치
      30000000 * lottoResult[7] + // 5개 + 보너스
      2000000000 * lottoResult[6]; // 6개 일치

    // 수익률 계산 및 출력
    const roi = ((prizeAmount / purchaseAmount) * 100).toFixed(1); // ROI(수익률)를 소수점 둘째 자리에서 반올림하여 소수점 한 자리까지 표시
    Console.print(`총 수익률은 ${roi}%입니다.`);
  }

  // 로또 구입 금액 입력
  async getPurchaseAmount() {
    while (true) {
      try {
        Console.print("구입금액을 입력해 주세요.");
        const input = await Console.readLineAsync("");
        // 입력값 검증. 1000보다 낮은 숫자거나, 1000으로 나누어 떨어지지 않는지 검증한다.
        return LottoInputValidator.validatePurchaseAmount(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  // 로또 당첨 번호 입력
  async getWinningNumbers() {
    while (true) {
      try {
        Console.print("당첨 번호를 입력해 주세요.");
        const input = await Console.readLineAsync("");
        // 입력값 검증
        return LottoInputValidator.validateWinningNumbers(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  // 보너스 번호 입력
  async getBonusNumber(winningNumbers) {
    while (true) {
      try {
        Console.print("보너스 번호를 입력해 주세요.");
        const input = await Console.readLineAsync("");
        // 입력값 검증
        return LottoInputValidator.validateBonusNumber(input, winningNumbers);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
