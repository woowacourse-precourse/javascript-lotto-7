import Lotto from './Lotto.js';
import { scan } from './utils/scanner.js';
import { getWin } from './WinLotto/getWin.js';
import { printResult } from './WinLotto/getStatistics.js';
import { Console } from '@woowacourse/mission-utils';
import Lottos from './Lottos.js';
import WinningLotto from './WinningLotto.js';

class App {
  async run() {
    const lottos = new Lottos();
    await lottos.getLottoAmount();
    const lottoArr = lottos.getLottos();

    const winningLotto = new WinningLotto();
    await winningLotto.splitLotto();
    await winningLotto.getBounusNumber();

    new Lotto(winningLotto.winningLottoNumber);
    Console.print(winningLotto.winningLottoNumber);

    // const gradeArr = getWin(lottos, lotto, Number(bonusNumber));
    // printResult(gradeArr, lottoAmount * 1000);
  }
}

export default App;
