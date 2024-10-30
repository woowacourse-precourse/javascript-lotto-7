import { MissionUtils } from '@woowacourse/mission-utils';
import Input from './Input.js';
import { OUTPUT_MESSAGE, RANK_OBJECT_ARRAY } from './lib/constants.js';
import Lotto from './Lotto.js';
import { calculateRateOfReturn } from './lib/utils.js';
import Output from './Output.js';

class App {
  #input;
  #lottoArray;
  #rankMap;

  constructor() {
    this.#input = new Input();
    this.#lottoArray = [];
    this.#rankMap = App.#createRankMap();
  }

  async run() {
    await this.#input.getPurchasePrice();
    const lottoCount = this.#input.purchasePrice / 1_000;

    for (let round = 0; round < lottoCount; round += 1) {
      const randomNumberArray = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6,
      );
      randomNumberArray.sort((a, b) => a - b);
      const lotto = new Lotto(randomNumberArray);
      this.#lottoArray.push(lotto);
    }

    MissionUtils.Console.print('');

    MissionUtils.Console.print(`${lottoCount}${OUTPUT_MESSAGE.PURCHASE_COUNT}`);
    this.#lottoArray.forEach((lotto) => lotto.printNumbers());

    MissionUtils.Console.print('');

    await this.#input.getWinningNumbers();

    MissionUtils.Console.print('');

    await this.#input.getBonusNumber();

    MissionUtils.Console.print('');

    let totalWinningPrice = 0;
    this.#lottoArray.forEach((lotto) => {
      const rankObject = lotto.getRankObject(
        this.#input.winningNumberArray,
        this.#input.bonusNumber,
      );

      if (rankObject) {
        this.#rankMap.set(this.#rankMap.get(rankObject.rank) + 1);
        totalWinningPrice += rankObject.winningPrice;
      }
    });

    const rateOfReturn = parseFloat(
      calculateRateOfReturn(
        totalWinningPrice,
        this.#input.purchasePrice,
      ).toFixed(2),
    );

    MissionUtils.Console.print(OUTPUT_MESSAGE.WINNING_STATICS);

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
