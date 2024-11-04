import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";
import Lotto from "../models/Lotto.js";
import WinningResult from "../models/WinningResult.js";

class LottoGame {
  #lottos = [];
  #winningResult;
  static LOTTO_PRICE = 1000;

  async play() {
    try {
      await this.#purchaseLottos();
      await this.#drawWinningNumbers();
      this.#showResult();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async #purchaseLottos() {
    const amount = await this.#getValidAmount();
    const count = amount / LottoGame.LOTTO_PRICE;

    this.#generateLottos(count);
    this.#printPurchaseInfo(count);
  }

  async #getValidAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const amount = Number(input);

    if (isNaN(amount) || amount <= 0) {
      throw new Error("[ERROR] 올바른 금액을 입력해 주세요.");
    }
    if (amount % LottoGame.LOTTO_PRICE !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");
    }

    return amount;
  }

  #generateLottos(count) {
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(numbers));
    }
  }

  #printPurchaseInfo(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
    Console.print("");
  }

  async #drawWinningNumbers() {
    const winningNumbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber(winningNumbers);

    this.#calculateResults(winningNumbers, bonusNumber);
  }

  async #getWinningNumbers() {
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const numbers = input.split(",").map((num) => Number(num.trim()));
    return new Lotto(numbers).getNumbers();
  }

  async #getBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    const number = Number(input);

    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (winningNumbers.includes(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }

    return number;
  }

  #calculateResults(winningNumbers, bonusNumber) {
    this.#winningResult = new WinningResult();

    this.#lottos.forEach((lotto) => {
      const { matchCount, hasBonus } = lotto.match(winningNumbers, bonusNumber);
      this.#winningResult.addResult(matchCount, hasBonus);
    });
  }

  #showResult() {
    const results = this.#winningResult.getResults();
    const totalPrize = this.#winningResult.calculateTotalPrize();
    const purchaseAmount = this.#lottos.length * LottoGame.LOTTO_PRICE;

    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${results[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[5.5]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${results[6]}개`);

    const profitRate = (totalPrize / purchaseAmount) * 100;
    Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.\n`);
  }
}

export default LottoGame;
