import { MissionUtils } from '@woowacourse/mission-utils';
import Input from './Input.js';
import { OUTPUT_MESSAGE, WINNING_PRICE_OBJECT } from './lib/constants.js';
import { intersection } from './lib/utils.js';
import Lotto from './Lotto.js';

class App {
  #input;
  #lottoArray;

  constructor() {
    this.#input = new Input();
    this.#lottoArray = [];
  }

  async run() {
    await this.#input.getPurchasePrice();

    for (let round = 0; round < this.#input.lottoCount; round += 1) {
      const randomNumberArray = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6,
      );
      randomNumberArray.sort((a, b) => a - b);
      const lotto = new Lotto(randomNumberArray);
      this.#lottoArray.push(lotto);
    }

    MissionUtils.Console.print(
      `${this.#input.lottoCount}${OUTPUT_MESSAGE.PURCHASE_COUNT}`,
    );
    this.#lottoArray.forEach((randomNumber) =>
      MissionUtils.Console.print(randomNumber),
    );

    await this.#input.getWinningNumbers();
    await this.#input.getBonusNumber();

    const winningCountMap = new Map([
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
    ]);

    this.#lottoArray.forEach((randomNumber) => {
      const winningCount = intersection(this.#input.winnerNumberArray, [
        ...randomNumber,
        this.#input.bonusNumber,
      ]).length;

      const previousWinningCount = winningCountMap.get(winningCount);
      if (previousWinningCount !== undefined)
        winningCountMap.set(winningCount, previousWinningCount + 1);
    });

    let winningPrice = 0;

    winningCountMap.forEach((value, winningCount) => {
      winningPrice += WINNING_PRICE_OBJECT[winningCount] * value;
    });

    const rateOfReturn = (winningPrice / this.#input.purchasePrice) * 100;

    MissionUtils.Console.print(OUTPUT_MESSAGE.WINNING_STATICS);
    winningCountMap.forEach((value, winningCount) => {
      MissionUtils.Console.print(
        `${winningCount}개 일치 (${WINNING_PRICE_OBJECT[winningCount]}원) - ${value}개`,
      );
    });

    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default App;
