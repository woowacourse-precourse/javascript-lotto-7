import { MissionUtils } from '@woowacourse/mission-utils';

class LottoMachine {
  generateLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

}

export default LottoMachine;
