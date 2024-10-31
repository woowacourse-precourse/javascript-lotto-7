import { Random } from '@woowacourse/mission-utils';
import parser from '../utils/parser.js';
import { LOTTO_CONFIG } from '../constants/constants.js';

class LottoIssuance {
  #lottoCount;
  #lottos = [];

  constructor(lottoCount) {
    this.#lottoCount = lottoCount;
    this.#issueLottos();
  }

  getIssuedLottos() {
    return this.#lottos;
  }

  #issueLottos() {
    for (let i = 0; i < this.#lottoCount; i++) {
      const issuedLottoNumbers = Random.pickUniqueNumbersInRange(
        LOTTO_CONFIG.NUMBER_RANGE.MIN, 
        LOTTO_CONFIG.NUMBER_RANGE.MAX, 
        LOTTO_CONFIG.NUMBERS_COUNT
      );
      const parseIssuedLottoNumbers = parser.parseSortArray(issuedLottoNumbers);
      this.#lottos.push(parseIssuedLottoNumbers);
    }
  }
}

export default LottoIssuance;
