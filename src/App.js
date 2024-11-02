import Lotto from './Lotto.js';
import { getLottoAmount } from './Lottos/getLottoAmount.js';
import { getLottos } from './Lottos/getLottos.js';
import { splitLottoNumber } from './Lottos/splitLottoNumber.js';
import { scan } from './utils/scanner.js';
import { getWin } from './WinLotto/getWin.js';
import { printResult } from './WinLotto/getStatistics.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const lottoAmount = await getLottoAmount();
    const lottos = getLottos(lottoAmount);

    const lottoString = await scan('\n당첨 번호를 입력해 주세요.');
    const lotto = splitLottoNumber(lottoString);
    new Lotto(lotto);

    //TODO: 보너스 번호도 중복되지 않은지, 숫자인지 등 유효성 체크 필요
    const bonusNumber = await scan('\n보너스 번호를 입력해 주세요.');

    const gradeArr = getWin(lottos, lotto, Number(bonusNumber));
    printResult(gradeArr, lottoAmount * 1000);
  }
}

export default App;
