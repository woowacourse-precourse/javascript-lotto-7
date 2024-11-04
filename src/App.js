import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

// 상수 정의
const LOTTO_PRICE = 1000;
const ERROR_MESSAGE = "[ERROR]";

class App {
  async run() {
    try {
      const purchaseAmount = await this.getInput("구입금액을 입력해 주세요.\n");
      this.validatePurchaseAmount(purchaseAmount);

      const lottoCount = Math.floor(purchaseAmount / LOTTO_PRICE);
      const lottos = this.generateLottos(lottoCount);
      Console.print(`\n${lottoCount}개를 구매했습니다.`);
      lottos.forEach((lotto) => Console.print(`[${lotto.getNumbers().join(", ")}]`));

      const winningNumbers = await this.getInput("\n당첨 번호를 입력해 주세요.\n");
      const bonusNumber = await this.getInput("\n보너스 번호를 입력해 주세요.\n");

      const parsedWinningNumbers = this.parseNumbers(winningNumbers);
      const parsedBonusNumber = parseInt(bonusNumber, 10);
      this.validateBonusNumber(parsedBonusNumber);

      const results = this.calculateResults(lottos, parsedWinningNumbers, parsedBonusNumber);
      this.printResults(results, purchaseAmount);
    } catch (error) {
      Console.print(`${ERROR_MESSAGE} ${error.message}`);
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
    if (isNaN(parsedAmount) || parsedAmount % LOTTO_PRICE !== 0) {
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

  calculateResults(lottos, winningNumbers, bonusNumber) {
    const results = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };

    lottos.forEach((lotto) => {
      const matchCount = lotto.getMatchCount(winningNumbers);
      const hasBonus = lotto.hasBonusNumber(bonusNumber);

      if (matchCount === 6) results.first++;
      else if (matchCount === 5 && hasBonus) results.second++;
      else if (matchCount === 5) results.third++;
      else if (matchCount === 4) results.fourth++;
      else if (matchCount === 3) results.fifth++;
    });

    return results;
  }

  printResults(results, purchaseAmount) {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${results.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${results.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results.first}개`);

    const totalPrize =
      results.first * 2000000000 +
      results.second * 30000000 +
      results.third * 1500000 +
      results.fourth * 50000 +
      results.fifth * 5000;
    const profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);

    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;
