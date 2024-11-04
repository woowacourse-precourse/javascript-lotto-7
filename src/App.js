import InputHandler from "./utils/InputHandler.js";
import InputValidator from "./utils/InputValidator.js";
import Lotto from './Lotto.js';
import {Console, Random} from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.inputValidator = new InputValidator();
    this.lottos = []; // 구매한 로또 객체들을 저장할 배열
    this.winLotto = null; // 당첨 번호
    this.bonusNumber = null; // 보너스 번호
    this.purchaseCost = 0; // 구입 금액
  }

  async run() {
    try {
      this.purchaseCost = await this.getPurchaseCost();
      await this.purchaseLotto(this.purchaseCost);
      await this.getWinningNumbers();
      this.printWinningStatistics();
      this.printProfitRate(); // 수익률 출력
    } catch (error) {
      console.error('무슨 에러인고:', error);
    }
  }

  async getPurchaseCost() {
    const cost = await this.inputHandler.getInput("구입금액을 입력해 주세요. \n");
    return await this.inputValidator.validateCost(cost);
  }

  async purchaseLotto(cost) {
    const purchaseNumber = Number(cost) / 1000; // 로또 구매 장수
    Console.print(`${purchaseNumber}개를 구매했습니다.`);
    for (let i = 0; i < purchaseNumber; i++) {
      const arr = Random.pickUniqueNumbersInRange(1, 45, 6);
      arr.sort((a, b) => a - b); // 오름차순으로 정렬
      const lotto = new Lotto(arr);
      this.lottos.push(lotto);
      Console.print(arr);
    }
  }

  async getWinningNumbers() {
    const winningNumbersInput = await this.inputHandler.getInput("당첨 번호를 입력해 주세요. \n");
    const winningNumbers = winningNumbersInput.split(",").map(num => Number(num.trim()));
    winningNumbers.sort((a, b) => a - b);
    this.winLotto = new Lotto(winningNumbers);
    const bonusNumberInput = await this.inputHandler.getInput("보너스 번호를 입력해주세요. \n");
    this.bonusNumber = Number(bonusNumberInput);
  }

  printWinningStatistics() {
    const statistics = {
      '3개 일치 (5,000원)': { count: 0, prize: 5000 },
      '4개 일치 (50,000원)': { count: 0, prize: 50000 },
      '5개 일치 (1,500,000원)': { count: 0, prize: 1500000 },
      '5개 일치, 보너스 볼 일치 (30,000,000원)': { count: 0, prize: 30000000 },
      '6개 일치 (2,000,000,000원)': { count: 0, prize: 2000000000 },
    };

    for (const lotto of this.lottos) {
      const matchedCount = this.getMatchedCount(lotto);
      const hasBonus = lotto.getNumbers().includes(this.bonusNumber);

      switch (matchedCount) {
        case 3:
          statistics['3개 일치 (5,000원)'].count++;
          break;
        case 4:
          statistics['4개 일치 (50,000원)'].count++;
          break;
        case 5:
          if (hasBonus) {
            statistics['5개 일치, 보너스 볼 일치 (30,000,000원)'].count++;
          } else {
            statistics['5개 일치 (1,500,000원)'].count++;
          }
          break;
        case 6:
          statistics['6개 일치 (2,000,000,000원)'].count++;
          break;
      }
    }

    this.printStatistics(statistics);
    this.totalPrize = this.calculateTotalPrize(statistics); // 당첨 금액 총합 계산
  }

  getMatchedCount(lotto) {
    const winningNumbers = this.winLotto.getNumbers();
    return lotto.getNumbers().filter(num => winningNumbers.includes(num)).length;
  }

  printStatistics(statistics) {
    Console.print("당첨 통계");
    Console.print("---");
    for (const [key, { count }] of Object.entries(statistics)) {
      Console.print(`${key} - ${count}개`);
    }
  }

  calculateTotalPrize(statistics) {
    return Object.values(statistics).reduce((total, { count, prize }) => total + count * prize, 0);
  }

  printProfitRate() {
    const profitRate = (this.totalPrize / this.purchaseCost) * 100;
    Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }
}

export default App;
