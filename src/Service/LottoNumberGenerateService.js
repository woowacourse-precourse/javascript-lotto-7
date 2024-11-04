import { MissionUtils } from '@woowacourse/mission-utils';
import {
  LOTTO_NUMBER_COUNT,
  RANDOM_NUMBER_END,
  RANDOM_NUMBER_START,
} from '../constants.js';

class LottoNumberGenerateService {
  generateUniqueLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      RANDOM_NUMBER_START,
      RANDOM_NUMBER_END,
      LOTTO_NUMBER_COUNT
    );
  }
}

export default LottoNumberGenerateService;
