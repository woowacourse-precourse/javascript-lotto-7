import inputView from './views/InputView.js';
import outputView from './views/OutputView.js';
import Lotto from './Lotto.js';
import { Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    const { lottoArr, costInput } = await this.makeLotto();
    const scoreTable = await this.checkLotto(lottoArr);
    outputView.printSuccessStatics(scoreTable);
    outputView.printSuccessRate(
      this.calculateSuccessRate(scoreTable, costInput),
    );
  }

  calculateSuccessRate(scoreTable, costInput) {
    const MONEY_TABLE = {
      3: 5000,
      4: 50000,
      5: 1500000,
      7: 30000000,
      6: 2000000000,
    };
    let incomeSum = 0;
    for (const [key, value] of Object.entries(scoreTable)) {
      incomeSum += MONEY_TABLE[key] * value;
    }
    const rate = (incomeSum / costInput) * 100;
    return rate.toFixed(1);
  }

  async checkLotto(lottoArr) {
    const successNumList = await inputView.getSuccessNum();
    const bonusNum = await inputView.getBonusNum();
    return this.makeScoreTable(successNumList, bonusNum, lottoArr);
  }

  makeScoreTable(successNumList, bonusNum, lottoArr) {
    let scoreTable = { 3: 0, 4: 0, 5: 0, 7: 0, 6: 0 };

    lottoArr.forEach((lotto) => {
      const score = this.calculateDiff(lotto.getNumbers(), successNumList);
      const isBonus = lotto.getNumbers().includes(Number(bonusNum));
      if (score >= 3) {
        scoreTable[String(score)] += 1;
      }
      if (score == 5 && isBonus) {
        scoreTable[5] -= 1;
        scoreTable[7] += 1;
      }
    });
    return scoreTable;
  }

  calculateDiff(LottoArr, SuccessArr) {
    const intersection = LottoArr.filter((x) => SuccessArr.includes(x));
    return intersection.length;
  }

  async makeLotto() {
    const costInput = await inputView.getInputCost();
    const lottoCnt = Number(costInput) / 1000;
    outputView.printPurchaseCount(lottoCnt);

    //로또 발행
    let lottoArr = [];
    for (let i = 0; i < lottoCnt; i++) {
      const tempLotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
      lottoArr.push(tempLotto);
      outputView.printLotto(tempLotto.getNumbers());
    }
    return { lottoArr, costInput };
  }
}

export default App;
