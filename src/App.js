import { MissionUtils } from '@woowacourse/mission-utils';
import InputManager from './InputManager.js';
import { OUTPUT_MESSAGE, RANK_OBJECT_ARRAY } from './lib/constants.js';
import Lotto from './Lotto.js';
import { calculateRateOfReturn } from './lib/utils.js';
import OutputManager from './OutputManager.js';
import LottoManager from './LottoManager.js';

class App {
  async run() {
    const purchasePrice = await InputManager.getPurchasePrice();

    const lottoCount = LottoManager.getLottoCount(purchasePrice);
    const lottoArray = LottoManager.generateLottoArray(lottoCount);

    OutputManager.printPurchaseCount(lottoCount);
    OutputManager.printNumbers(lottoArray);

    const winningLottoArray = await InputManager.getWinningNumbers();
    const bonusNumber = await InputManager.getBonusNumber();

    const lottoManager = new LottoManager(
      lottoArray,
      winningLottoArray,
      bonusNumber,
    );
    const { rankMap, totalWinningPrice } = lottoManager.draw();

    const rateOfReturn = parseFloat(
      calculateRateOfReturn(totalWinningPrice, purchasePrice).toFixed(2),
    );

    OutputManager.printWinningStatics();

    RANK_OBJECT_ARRAY.forEach((rankObject) => {
      let bonusNumberString = '';
      if (rankObject.rank === 2) bonusNumberString = ', 보너스 볼 일치';

      MissionUtils.Console.print(
        `${
          rankObject.winningCount
        }개 일치${bonusNumberString} (${rankObject.winningPrice.toLocaleString(
          'ko-KR',
        )}원) - ${rankMap[rankObject.rank] ?? 0}개`,
      );
    });

    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default App;
