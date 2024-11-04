import { Console } from "@woowacourse/mission-utils";
import {
  validatePurchaseAmount,
  validateLottoNumbers,
  validateBonusNumber,
} from "./utils/ValidationUtils";
import LottoGame from "./LottoGame";

class App {
  async #getPurchaseAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return validatePurchaseAmount(input);
  }

  async #getWinningNumbers() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const numbers = input.split(",").map((num) => parseInt(num.trim()));
    return validateLottoNumbers(numbers);
  }

  async #getBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    return validateBonusNumber(input, winningNumbers);
  }

  #printPurchasedLottos(count, lottos) {
    Console.print(`\n${count}개를 구매했습니다.`);
    lottos.forEach((numbers) => {
      Console.print(`[${numbers.join(", ")}]`);
    });
  }

  #printResults(results, profitRate) {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${results.FIFTH}개`);
    Console.print(`4개 일치 (50,000원) - ${results.FOURTH}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results.THIRD}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.SECOND}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${results.FIRST}개`);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  async run() {
    const lottoGame = new LottoGame();

    try {
      const amount = await this.#getPurchaseAmount();
      const count = lottoGame.purchaseLottos(amount);

      this.#printPurchasedLottos(count, lottoGame.getPurchasedLottos());

      const winningNumbers = await this.#getWinningNumbers();
      const bonusNumber = await this.#getBonusNumber(winningNumbers);

      lottoGame.setWinningNumbers(winningNumbers, bonusNumber);

      const results = lottoGame.calculateResults();
      const profitRate = lottoGame.calculateProfitRate(results);

      this.#printResults(results, profitRate);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
