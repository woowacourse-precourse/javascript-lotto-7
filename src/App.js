import { MissionUtils } from '@woowacourse/mission-utils';
import Input from './Input.js';
import { OUTPUT_MESSAGE } from './lib/constants.js';

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
  }
}

export default App;
