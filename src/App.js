import { MissionUtils } from '@woowacourse/mission-utils';
import Input from './Input.js';

class App {
  async run() {
    const input = new Input();
    await input.getPurchasePrice();

    for (let round = 0; round < input.lottoCount; round += 1) {
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6,
      );
    }
  }
}

export default App;
