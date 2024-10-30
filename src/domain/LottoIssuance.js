import { Random } from '@woowacourse/mission-utils';
import parser from '../utils/parser.js';

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
      const issuedLottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const parseIssuedLottoNumbers = parser.parseSortArray(issuedLottoNumbers);
      this.#lottos.push(parseIssuedLottoNumbers);
    }
  }
}

export default LottoIssuance;
