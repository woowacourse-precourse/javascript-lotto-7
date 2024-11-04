import { Console } from "@woowacourse/mission-utils";
import Purchase from "./Purchase.js";
import Lotto from "./Lotto.js";
import Statistics from "./Statistics.js";

class App {
  async run() {
    const count = await this.getPurchaseCount();
    const purchaseArray = this.generateLottos(count);
    const { winArray, winBonus } = await this.getWinningNumbers();
    const { sumAmount, amountArray } = this.calculateResults(purchaseArray, winArray, winBonus);
    this.displayStatistics(count, sumAmount, amountArray);
  }

  async getPurchaseCount() {
    const purchase = new Purchase();
    const count = await purchase.getPayment();
    Console.print(`${count}개를 구매했습니다.`);
    return count;
  }

  generateLottos(count) {
    const lottos = Array.from({ length: count }, () => {
      const lotto = new Lotto();
      lotto.printNumbers();
      return lotto;
    });
    Console.print("");
    return lottos;
  }

  async getWinningNumbers() {
    const lotto = new Lotto();
    const winArray = await lotto.getWinNumbers();
    const winBonus = await lotto.getBonusNumber();
    return { winArray, winBonus };
  }

  calculateResults(purchaseArray, winArray, winBonus) {
    const statistics = new Statistics();
    let sumAmount = 0;
    const amountArray = [0, 0, 0, 0, 0];
  
    purchaseArray.forEach((lotto) => {
      const matchCount = lotto.checkWinNumbers(winArray);
      let prize = 0;
      let isBonusMatch = false;
  
      if (matchCount === 6) {
        prize = lotto.calculatePrize(6);
      } else if (matchCount === 5 && lotto.checkWinNumbers([winBonus]) === 1) {
        prize = lotto.calculatePrize(5, true);
        isBonusMatch = true;
      } else {
        prize = lotto.calculatePrize(matchCount);
      }
  
      sumAmount += prize;
      statistics.updateAmountArray(amountArray, matchCount, isBonusMatch);
    });
  
    return { sumAmount, amountArray };
  }

  displayStatistics(count, sumAmount, amountArray) {
    const statistics = new Statistics();
    statistics.displayStatistics(count, sumAmount, amountArray);
  }
}

export default App;