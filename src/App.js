import { Console, Random } from '@woowacourse/mission-utils';
import BonusLotto from './BonusLotto.js';
import { MONEY_UNIT } from './constants/magicNumber.js';
import Lotto from './Lotto.js';
import Money from './Money.js';
import Profit from './Profit.js';
import Rank from './Rank.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    let lottoMoney;
    let lottoMoneyRepeater = true;
    while (lottoMoneyRepeater) {
      try {
        // 사용자 로또 횟수 발행
        const inputMoney = await InputView.readMoney();
        lottoMoney = new Money(inputMoney);
        lottoMoneyRepeater = false;
      } catch (error) {
        Console.print(error.message);
      }
    }
    const lottoCounter = lottoMoney.getMoney() / MONEY_UNIT;
    OutputView.printLottoCounter(lottoCounter);

    // 사용자 로또 발행
    const lottoList = [];
    for (let i = 0; i < lottoCounter; i++) {
      const lotto = new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
      // const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lottoList.push(lotto.getNumbers());
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    }

    // 당첨 로또 발행
    let winningLotto;
    let winningLottoRepeater = true;
    while (winningLottoRepeater) {
      try {
        const winningNumbers = await InputView.readWinningNumbers();
        winningLotto = new Lotto(winningNumbers.split(','));
        winningLottoRepeater = false;
      } catch (error) {
        Console.print(error.message);
      }
    }

    let bonusLotto;
    let bonusLottoRepeater = true;
    while (bonusLottoRepeater) {
      try {
        const bonusNumber = await InputView.readBonusNumber();
        bonusLotto = new BonusLotto(winningLotto.getNumbers(), bonusNumber);
        bonusLottoRepeater = false;
      } catch (error) {
        Console.print(error.message);
      }
    }
    // 로또 등수 확인
    const rankCounter = [0, 0, 0, 0, 0];
    lottoList.forEach((lotto) => {
      const rank = new Rank(
        winningLotto.getNumbers(),
        bonusLotto.getBonusNumber(),
        lotto,
      );

      if (rank.getRank() !== 6) {
        rankCounter[5 - rank.getRank()] += 1;
      }
    });

    // 로또 수익률 확인
    const profit = new Profit(lottoMoney.getMoney(), rankCounter);
    OutputView.printLottoStatics(rankCounter, profit.getProfit());
  }
}

export default App;
