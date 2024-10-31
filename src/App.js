import { MissionUtils } from '@woowacourse/mission-utils';
import InputManager from './InputManager.js';
import { OUTPUT_MESSAGE, RANK_OBJECT_ARRAY } from './lib/constants.js';
import Lotto from './Lotto.js';
import { calculateRateOfReturn } from './lib/utils.js';
import OutputManager from './OutputManager.js';
import LottoManager from './LottoManager.js';

class App {
  #rankMap;

  constructor() {
    this.#rankMap = App.#createRankMap();
  }

  async run() {
    const purchasePrice = await InputManager.getPurchasePrice();

    const lottoManager = new LottoManager(purchasePrice);

    OutputManager.printPurchaseCount(lottoManager.lottoCount);

    OutputManager.printNumbers(lottoManager.lottoArray);

    const winningNumberArray = await InputManager.getWinningNumbers();

    const bonusNumber = await InputManager.getBonusNumber();

    let totalWinningPrice = 0;

    lottoManager.lottoArray.forEach((lotto) => {
      const rankObject = lotto.getRankObject(winningNumberArray, bonusNumber);

      if (rankObject) {
        this.#rankMap.set(this.#rankMap.get(rankObject.rank) + 1);
        totalWinningPrice += rankObject.winningPrice;
      }
    });

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
        )}원) - ${this.#rankMap[rankObject.rank] ?? 0}개`,
      );
    });

    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }

  static #createRankMap() {
    return new Map(new Array(5).fill().map((_, index) => [index + 1, 0]));
  }
}

export default App;
