import { Console } from "@woowacourse/mission-utils";
import { PURCHASE_MESSAGE, LOTTO_MESSAGE, BONUS_MESSAGE } from "./constants.js";
import Purchase from "./Purchase.js";
import Lotto from "./Lotto.js";
import Bonus from "./Bonus.js";
import LottoResult from "./LottoResult.js";

class App {
  async run() {
    const purchase = await this.getValidPurchase();
    purchase.generateAllRandomNumbers();
    this.displayPurchaseResults(purchase);

    const winningLotto = await this.getWinningLottoNumbers();
    const bonusNumber = await this.getBonusNumber();

    const lottoResult = new LottoResult(winningLotto.getNumbers(), bonusNumber.getNumber(), purchase);
    lottoResult.printResults();
  }

  /**구입 금액 */
  async getValidPurchase() {
    while (true) {
      try {
        const cost = await Console.readLineAsync(PURCHASE_MESSAGE.INPUT_PURCHASE_COST);
        return new Purchase(cost);
      } catch (error) {
        Console.print(`\n${error.message}\n`);
      }
    }
  }

  displayPurchaseResults(purchase) {
    const purchaseCount = purchase.getPurchaseCount();
    Console.print(`\n${purchaseCount}개를 구매했습니다.`);
  
    purchase.getRandomNumbersList().forEach((numbers) => {
      Console.print(`[${numbers.join(", ")}]`); 
    });
  }

  /** 로또 */
  async getWinningLottoNumbers() {
    while (true) {
      try {
        const input = await Console.readLineAsync(LOTTO_MESSAGE.INPUT_LOTTO_NUMBERS);
        const numbers = input.split(",").map(Number);
        return new Lotto(numbers);
      } catch (error) {
        Console.print(`\n${error.message}\n`);
      }
    }
  }

  /**보너스 번호 */
  async getBonusNumber() {
    while (true) {
      try {
        const input = await Console.readLineAsync(BONUS_MESSAGE.INPUT_BONUS_NUMBER);
        return new Bonus(input);
      } catch (error) {
        Console.print(`\n${error.message}\n`);
      }
    }
  }
}

export default App;