import { MissionUtils } from '@woowacourse/mission-utils';

class LottoNumberGenerateService {
  generateUniqueLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoNumberGenerateService;
