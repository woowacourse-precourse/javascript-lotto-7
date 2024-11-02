import Lotto from './Lotto.js';
import { scan } from './utils/scanner.js';
import { getWin } from './WinLotto/getWin.js';
import { printResult } from './WinLotto/getStatistics.js';
import { Console } from '@woowacourse/mission-utils';
import Lottos from './Lottos.js';
import WinningLotto from './WinningLotto.js';
import Winning from './Winning.js';

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

    Console.print(gradeArray);
    // const gradeArr = getWin(lottos, lotto, Number(bonusNumber));
    // printResult(gradeArr, lottoAmount * 1000);
  }
}

export default App;
