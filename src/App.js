// ### 1개의 사용자 로또 발행하기

// - [x] 1에서 45까지 범위에서 중복되지 않는 5개의 숫자를 추출한다.
// - [x] 1개의 로또를 생성한다.
import { MissionUtils } from '@woowacourse/mission-utils';

import Lotto from './Lotto';

class App {
  async run() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(numbers);
  }
}

export default App;
