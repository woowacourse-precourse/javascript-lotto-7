import InputHandler from "./utils/InputHandler.js";
import InputValidator from "./utils/InputValidator.js";
import Lotto from './Lotto.js';
import {Console, Random} from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.inputValidator = new InputValidator();
    this.lottos = []; // Lotto 객체들을 저장할 배열.(구매한 로또)
    this.winLotto = null; // 당첨 번호
    this.bonusNumber = null; // 보너스 번호
  }

  async run() {
    try {
      const purchaseCost = await this.getPurchaseCost();
      await this.purchaseLotto(purchaseCost);
      await this.getWinningNumbers();
      this.printWinningStatistics(); // 당첨 통계 출력
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
      '3개 일치 (5,000원)': 0,
      '4개 일치 (50,000원)': 0,
      '5개 일치 (1,500,000원)': 0,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
      '6개 일치 (2,000,000,000원)': 0,
    };

    for (const lotto of this.lottos) {
      const matchedCount = this.getMatchedCount(lotto);

      switch (matchedCount) {
        case 3:
          statistics['3개 일치 (5,000원)']++;
          break;
        case 4:
          statistics['4개 일치 (50,000원)']++;
          break;
        case 5:
          if (this.bonusNumber && lotto.numbers.includes(this.bonusNumber)) {
            statistics['5개 일치, 보너스 볼 일치 (30,000,000원)']++;
          } else {
            statistics['5개 일치 (1,500,000원)']++;
          }
          break;
        case 6:
          statistics['6개 일치 (2,000,000,000원)']++;
          break;
      }
    }

    this.printStatistics(statistics);
  }

  getMatchedCount(lotto) {
    const winningNumbers = this.winLotto.getNumbers(); // 수정된 부분
    return lotto.getNumbers().filter(num => winningNumbers.includes(num)).length;
  }

  printStatistics(statistics) {
    Console.print("당첨 통계");
    Console.print("---");
    for (const [key, value] of Object.entries(statistics)) {
      Console.print(`${key} - ${value}개`);
    }
  }
}

export default App;
