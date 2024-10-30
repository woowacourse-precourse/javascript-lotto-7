import { MissionUtils } from '@woowacourse/mission-utils';
import Input from './Input.js';
import {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  WINNING_PRICE_OBJECT,
} from './lib/constants.js';
import { intersection } from './lib/utils.js';

class App {
  async run() {
    const input = new Input();
    await input.getPurchasePrice();

    const randomNumberArray = [];
    for (let round = 0; round < input.lottoCount; round += 1) {
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6,
      );
      randomNumber.sort((a, b) => a - b);
      randomNumberArray.push(randomNumber);
    }

    MissionUtils.Console.print(
      `${input.lottoCount}${OUTPUT_MESSAGE.PURCHASE_COUNT}`,
    );
    randomNumberArray.forEach((randomNumber) =>
      MissionUtils.Console.print(randomNumber),
    );

    const rawWinnierNumbers = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.WINNING_NUMBER,
    );
    const winnerNumberArray = rawWinnierNumbers.split(',').map(Number);
    const rawBonusNumber = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.BONUS_NUMBER,
    );
    const bonusNumber = +rawBonusNumber;

    const winningCountMap = new Map([
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
    ]);
    randomNumberArray.forEach((randomNumber) => {
      const winningCount = intersection(winnerNumberArray, [
        ...randomNumber,
        bonusNumber,
      ]).length;

      const previousWinningCount = winningCountMap.get(winningCount);
      if (previousWinningCount !== undefined)
        winningCountMap.set(winningCount, previousWinningCount + 1);
    });

    let winningPrice = 0;

    winningCountMap.forEach((value, winningCount) => {
      winningPrice += WINNING_PRICE_OBJECT[winningCount] * value;
    });
  }
}

export default App;
