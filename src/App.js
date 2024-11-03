import Lotto from './Lotto.js';
import Lottos from './Lottos.js';
import MakeWinningLotto from './MakeWinningLotto.js';
import Winning from './Winning.js';
import Statistics from './Statistics.js';

class App {
  async run() {
    const lottos = new Lottos();
    await lottos.getLottoAmount();
    lottos.getLottos();

    const winningLotto = new MakeWinningLotto();
    await winningLotto.splitLotto();

    new Lotto(winningLotto.winningLottoNumber);
    await winningLotto.getBounusNumber();

    const gradeArray = new Winning(
      lottos.lottos,
      winningLotto.winningLottoNumber,
      winningLotto.bonusNumber
    );

    new Statistics(gradeArray.gradeArray, lottos.lottoAmount * 1000);
  }
}

export default App;
