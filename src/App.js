import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    let amount;
    while (true) {
      try {
        amount = await this.getPurchaseAmount();
        this.validatePurchaseAmount(amount);
        Console.print(`구입 금액: ${amount}원`);

        const lottoTickets = this.generateLottos(amount);
        this.printLottos(lottoTickets);

        const mainNumbers = await this.getMainNumbers();
        const bonusNumber = await this.getBonusNumber(mainNumbers);
        Console.print(`당첨 번호: ${mainNumbers.join(", ")} + 보너스 번호: ${bonusNumber}`);

        const results = this.checkWinningResults(lottoTickets, mainNumbers, bonusNumber);
        this.printWinningResults(results);

        const yieldRate = this.calculateYield(results.totalPrize, amount);
        Console.print(`총 수익률: ${yieldRate}%`);

        break;
      } catch (error) {
        Console.print(error.message);
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
        Console.print(error.message);
      }
    }
  }

  validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
    }
  }

  generateLottos(amount) {
    const lottoCount = amount / 1000;
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      lottos.push(lottoNumbers);
    }
    return lottos;
  }

  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  async getMainNumbers() {
    while (true) {
      try {
        const mainInput = await Console.readLineAsync("당첨 번호를 입력해 주세요. (쉼표로 구분하여 6개의 번호 입력)\n");
        const mainNumbers = mainInput.split(",").map((num) => Number(num.trim()));

        this.validateMainNumbers(mainNumbers);
        return mainNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getBonusNumber(mainNumbers) {
    while (true) {
      try {
        const bonusInput = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
        const bonusNumber = Number(bonusInput.trim());

        this.validateBonusNumbers(bonusNumber, mainNumbers);
        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  validateMainNumbers(mainNumbers) {
    if (mainNumbers.length !== 6 || new Set(mainNumbers).size !== 6) {
      throw new Error("[ERROR] 당첨 번호는 중복되지 않는 6개의 숫자여야 합니다.");
    }
    if (!mainNumbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
    }    
  }

  validateBonusNumbers(bonusNumber, mainNumbers) {    
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (mainNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.");
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
    
    lottoTickets.forEach((ticket) => {
      const matchCount = ticket.filter((num) => mainNumbers.includes(num)).length;
      const hasBonus = ticket.includes(bonusNumber);

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
    return yieldRate.toFixed(2);
  }

  printWinningResults(results) {
    Console.print("당첨 통계:");
    Console.print(`1등 (6개 일치): ${results.first}개`);
    Console.print(`2등 (5개 일치 + 보너스 번호): ${results.second}개`);
    Console.print(`3등 (5개 일치): ${results.third}개`);
    Console.print(`4등 (4개 일치): ${results.fourth}개`);
    Console.print(`5등 (3개 일치): ${results.fifth}개`);
    Console.print(`총 당첨 금액: ${results.totalPrize}원`);
  }
}

export default App;
