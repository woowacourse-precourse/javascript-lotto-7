import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    let amount;
    while (true) {
      try {
        amount = await this.getPurchaseAmount();
        this.validatePurchaseAmount(amount);
        Console.print(`구입 금액: ${amount}원\n`);

        const lottoTickets = this.generateLottos(amount);
        this.printLottos(lottoTickets);

        const mainNumbers = await this.getMainNumbers();
        const bonusNumber = await this.getBonusNumber(mainNumbers);
        Console.print(`\n당첨 번호: ${mainNumbers.join(", ")} + 보너스 번호: ${bonusNumber}\n`);

        const results = this.checkWinningResults(lottoTickets, mainNumbers, bonusNumber);
        this.printWinningResults(results);

        const yieldRate = this.calculateYield(results.totalPrize, amount);
        Console.print(`총 수익률은 ${yieldRate}%입니다.\n`);

        break;
      } catch (error) {
        Console.print(`${error.message}\n`);
      }
    }
  }

  async getPurchaseAmount() {
    while (true) {
      try {
        const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        const amount = Number(input);
        this.validatePurchaseAmount(amount);
        return amount;
      } catch (error) {
        Console.print(`${error.message}\n`);
      }
    }
  }

  validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount % 1000 !== 0 || amount <= 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위의 양수여야 합니다.");
    }
  }

  generateLottos(amount) {
    const lottoCount = amount / 1000;
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      lottos.push(new Lotto());
    }
    return lottos;
  }

  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      Console.print(`[${lotto.numbers.join(", ")}]`);
    });
  }

  async getMainNumbers() {
    while (true) {
      try {
        const mainInput = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
        const mainNumbers = mainInput.split(",").map((num) => Number(num.trim()));

        const mainLotto = new Lotto(mainNumbers);
        return mainLotto.numbers;
      } catch (error) {
        Console.print(`${error.message}\n`);
      }
    }
  }

  async getBonusNumber(mainNumbers) {
    while (true) {
      try {
        const bonusInput = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
        const bonusNumber = Number(bonusInput.trim());

        Lotto.validateBonus(bonusNumber, mainNumbers);
        return bonusNumber;
      } catch (error) {
        Console.print(`${error.message}\n`);
      }
    }
  }

  checkWinningResults(lottoTickets, mainNumbers, bonusNumber) {
    const prizeTiers = {
      first: { matchCount: 6, prize: 2000000000 },
      second: { matchCount: 5, hasBonus: true, prize: 30000000 },
      third: { matchCount: 5, hasBonus: false, prize: 1500000 },
      fourth: { matchCount: 4, prize: 50000 },
      fifth: { matchCount: 3, prize: 5000 },
    };

    const results = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0, totalPrize: 0 };

    lottoTickets.forEach(ticket => {
      const matchCount = ticket.matchCount(mainNumbers);
      const hasBonus = ticket.hasBonus(bonusNumber);

      if (matchCount === prizeTiers.first.matchCount) {
        results.first += 1;
        results.totalPrize += prizeTiers.first.prize;
      } else if (matchCount === prizeTiers.second.matchCount && hasBonus) {
        results.second += 1;
        results.totalPrize += prizeTiers.second.prize;
      } else if (matchCount === prizeTiers.third.matchCount && hasBonus) {
        results.third += 1;
        results.totalPrize += prizeTiers.third.prize;
      } else if (matchCount === prizeTiers.fourth.matchCount) {
        results.fourth += 1;
        results.totalPrize += prizeTiers.fourth.prize;
      } else if (matchCount === prizeTiers.fifth.matchCount) {
        results.fifth += 1;
        results.totalPrize += prizeTiers.fifth.prize;
      }
    });
    return results;
  }

  calculateYield(totalPrize, purchaseAmount) {
    const yieldRate = (totalPrize / purchaseAmount) * 100;
    return yieldRate.toFixed(1);
  }

  printWinningResults(results) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${results.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${results.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results.first}개\n`);
  }
}

export default App;
