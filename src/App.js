import Lotto from './Lotto.js';
import { splitLotto } from './Lottos/splitLottoNumber.js';
import { scan } from './utils/scanner.js';
import { getWin } from './WinLotto/getWin.js';
import { printResult } from './WinLotto/getStatistics.js';
import { Console } from '@woowacourse/mission-utils';
import Lottos from './Lottos.js';

class App {
  async run() {
    const lottos = new Lottos();
    await lottos.getLottoAmount();
    const lottoArr = lottos.getLottos();

    new Lotto(await splitLotto());

    //TODO: 보너스 번호도 중복되지 않은지, 숫자인지 등 유효성 체크 필요
    const bonusNumber = await scan('\n보너스 번호를 입력해 주세요.');

    const gradeArr = getWin(lottos, lotto, Number(bonusNumber));
    printResult(gradeArr, lottoAmount * 1000);
  }
}

export default App;
