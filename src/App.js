import { MissionUtils } from '@woowacourse/mission-utils';

import Lotto from './Lotto';

class App {
  async run() {
  }

  generateLotto() {
    const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(randomNumber);
  }
}

export default App;
