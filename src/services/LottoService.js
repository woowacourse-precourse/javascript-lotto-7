import { Random } from '@woowacourse/mission-utils';
import Lotto from '../models/Lotto.js';

class LottoService {
  getGeneratedLottoNumbers(lottoAmount) {
    return Array.from({ length: lottoAmount }, () => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(numbers);
    });
  }
}
export default LottoService;
