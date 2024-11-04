import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  #lottos = [];
  #winningNumbers = [];
  #bonusNumber;

  async run() {
    try {
      await this.purchaseLottos();
      await this.inputWinningNumbers();
      await this.inputBonusNumber();
      this.printResult();
    } catch(error) {
      Console.print(error.message);
      return;  // 에러 발생 시 더 이상 진행하지 않음
    }
  }

  async purchaseLottos() {
    const amount = await this.getValidAmount();
    const count = amount / 1000;
    
    this.#lottos = Lotto.createLotsLotto(count);
    Console.print(`\n${count}개를 구매했습니다.`);
    this.printLottos();
  }

  async getValidAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const amount = Number(input);

    if (isNaN(amount)) {
      throw new Error("[ERROR] 구입 금액을 숫자로 입력해주세요.");
    }
    if (amount < 1000) {
      throw new Error("[ERROR] 구입 금액은 1000원 이상이어야 합니다.");
    }
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해주세요.");
    }

    return amount;
  }

  printLottos() {
    this.#lottos.forEach(lotto => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  async inputWinningNumbers() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const numbers = input.split(',').map(num => Number(num.trim()));
    
    try {
      new Lotto(numbers);
      this.#winningNumbers = numbers;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async inputBonusNumber() {
    const input = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    const number = Number(input);
    
    if (isNaN(number)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (this.#winningNumbers.includes(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
    
    this.#bonusNumber = number;
  }

  printResult() {
    const results = this.calculateResults();
    const profit = this.calculateProfit(results);
    const totalAmount = this.#lottos.length * 1000;
    const profitRate = ((profit / totalAmount) * 100).toFixed(1);

    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${results[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[5.5]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results[6]}개`);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  calculateResults() {
    const results = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
    
    this.#lottos.forEach(lotto => {
      const matchCount = lotto.countMatchingNumbers(this.#winningNumbers);
      
      if (matchCount === 6) results[6]++;
      else if (matchCount === 5 && lotto.contains(this.#bonusNumber)) results[5.5]++;
      else if (matchCount === 5) results[5]++;
      else if (matchCount === 4) results[4]++;
      else if (matchCount === 3) results[3]++;
    });
    
    return results;
  }

  calculateProfit(results) {
    return (
      results[6] * 2000000000 +
      results[5.5] * 30000000 +
      results[5] * 1500000 +
      results[4] * 50000 +
      results[3] * 5000
    );
  }
}

export default App;