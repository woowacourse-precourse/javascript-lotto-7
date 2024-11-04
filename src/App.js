import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {}

  getRandomLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default App;
