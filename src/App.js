import Lotto from './Lotto.js';
import Lottos from './Lottos.js';
import MakeWinningLotto from './MakeWinningLotto.js';
import Winning from './Winning.js';
import Statistics from './Statistics.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  winningLotto;

  async run() {
    const lottos = new Lottos();
    await lottos.getLottoAmount();
    lottos.getLottos();

    this.winningLotto = new MakeWinningLotto();
    await this.getLotto();
    await this.getBonusNumber();

    const gradeArray = new Winning(
      lottos.lottos,
      this.winningLotto.winningLottoNumber,
      this.winningLotto.bonusNumber
    );

    new Statistics(gradeArray.gradeArray, lottos.lottoAmount * 1000);
  }

  async getLotto() {
    try {
      await this.winningLotto.splitLotto();
      new Lotto(this.winningLotto.winningLottoNumber);
    } catch (err) {
      Console.print(err);
      await this.getLotto();
    }
  }

  async getBonusNumber() {
    try {
      await this.winningLotto.getBonusNumber();
    } catch (err) {
      Console.print(err);
      await this.getBonusNumber();
    }
  }
}

export default App;
