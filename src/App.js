import { MissionUtils } from '@woowacourse/mission-utils';
import Input from './Input.js';
import { OUTPUT_MESSAGE, WINNING_PRICE_OBJECT } from './lib/constants.js';
import { intersection } from './lib/utils.js';

class App {
  #input;

  constructor() {
    this.#input = new Input();
  }

  async run() {
    await this.#input.getPurchasePrice();

    const randomNumberArray = [];
    for (let round = 0; round < this.#input.lottoCount; round += 1) {
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6,
      );
      randomNumber.sort((a, b) => a - b);
      randomNumberArray.push(randomNumber);
    }

    MissionUtils.Console.print(
      `${this.#input.lottoCount}${OUTPUT_MESSAGE.PURCHASE_COUNT}`,
    );
    randomNumberArray.forEach((randomNumber) =>
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

    randomNumberArray.forEach((randomNumber) => {
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

    const rateOfReturn = (winningPrice / this.#input.purchacePrice) * 100;

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
