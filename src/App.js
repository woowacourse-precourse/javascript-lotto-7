import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  static PRICE_PER_TICKET = 1000;
  static RANKING = {
    3: { prize: 5000, matchNumber: "3개 일치" },
    4: { prize: 50000, matchNumber: "4개 일치" },
    5: { prize: 1500000, matchNumber: "5개 일치" },
    15: { prize: 30000000, matchNumber: "5개 일치, 보너스 볼 일치" },
    6: { prize: 2000000000, matchNumber: "6개 일치" },
  };

  async run() {
    try {
      const money = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
      const lottos = this.purchaseLottos(Number(money));
      this.issueLottos(lottos);    
    
      const winInput = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
      const winNumbers = this.parseWinInput(winInput);

      const bonusInput = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
      const bonusNumber = this.validateBonusNumber(Number(bonusInput), winNumbers);

      const results = this.countResults(lottos, winNumbers, bonusNumber);
      const profitRate = this.calculateProfit(results, money);
      this.resultOutput(results, profitRate);
      
    } catch (error) {
      Console.print(error.message); 
    }
}

  purchaseLottos(money) {
    if (!Number.isInteger(money) || money <= 0 || money % App.PRICE_PER_TICKET !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위의 양의 정수여야 합니다.");
    }
    
    const count = money / App.PRICE_PER_TICKET;
    return Array.from({ length: count }, () => Lotto.generateLotto());
  }

  issueLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(`[${lotto.getNumbers().join(", ")}]`));
  }

  parseWinInput(input) {
    const numbers = input.split(',').map(Number);
    if (numbers.length !== 6 || new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 당첨 번호는 중복되지 않는 6개의 숫자로 구성되어야 합니다.");
    }
    if (!numbers.every((num) => Number.isInteger(num) && num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 정수로 구성되어야 합니다.");
    }
    return numbers;
  }

  validateBonusNumber(bonusNumber, winNumbers) {
    if (winNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.");
    }
    if (!Number.isInteger(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    return bonusNumber;
  }

  countResults(lottos, winNumbers, bonusNumber) {
    const winningLotto = new Lotto(winNumbers);
    const results = { 3: 0, 4: 0, 5: 0, 15: 0, 6: 0 };
  
    lottos.forEach((lotto) => {
      const matchCount = lotto.matchCount(winningLotto.getNumbers());
      
      if (matchCount === 6) return results[6]++;
      if (matchCount === 5 && lotto.includes(bonusNumber)) return results[15]++;
      if (results[matchCount] !== undefined) results[matchCount]++;
    });

    return results;
  }  

  calculateProfit(results, amountSpent) {
    const totalPrize = Object.entries(results).reduce(
      (acc, [rank, count]) => acc + count * App.RANKING[rank].prize, 0);
    return ((totalPrize / amountSpent) * 100).toFixed(1);
  }

  resultOutput(results, profitRate) {
    Console.print("\n당첨 통계\n---");

    const order = [3, 4, 5, 15, 6];
    order.forEach((rank) => {
        Console.print(`${App.RANKING[rank].matchNumber} (${App.RANKING[rank].prize.toLocaleString()}원) - ${results[rank]}개`);
    });

    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;