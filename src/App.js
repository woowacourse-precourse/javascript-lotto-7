import Lotto from './Lotto.js';
import Lottos from './Lottos.js';
import WinningLotto from './WinningLotto.js';
import Winning from './Winning.js';
import Statistics from './Statistics.js';

class App {
  async run() {
    const lottos = new Lottos();
    await lottos.getLottoAmount();
    lottos.getLottos();

    const winningLotto = new WinningLotto();
    await winningLotto.splitLotto();
    await winningLotto.getBounusNumber();

    new Lotto(winningLotto.winningLottoNumber);

    const gradeArray = new Winning(
      lottos.lottos,
      winningLotto.winningLottoNumber
    );

    new Statistics(gradeArray.gradeArray, lottos.lottoAmount * 1000);
  }
}

export default App;
