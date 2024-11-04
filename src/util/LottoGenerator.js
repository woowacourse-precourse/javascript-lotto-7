import { MissionUtils } from '@woowacourse/mission-utils';
import { MagicNumber } from '../constants/MagicNumber.js';
import LottoPrice from '../LottoPrice.js';

class LottoGenerator {
  #count;

  constructor(count) {
    this.validate(count);
    this.#count = count / MagicNumber.LOTTO_PRICE;
  }

  validate(count) {
    const lottoPrice = new LottoPrice(count);
    lottoPrice.validate(count);
  }

  generateLottoNumbers() {
    const lottoNumbers = Array.from({ length: this.#count }, () =>
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6),
    );
    return lottoNumbers;
  }
}
export default LottoGenerator;
