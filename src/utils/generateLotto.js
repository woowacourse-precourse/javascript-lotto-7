import { Random } from '@woowacourse/mission-utils';
import { LOTTO_CONFIG } from '../constants/lottoConfig.js';

class GenerateLotto {
  /**
   * 로또 번호를 생성
   * @returns {number[]}
   */
  static createRandomNumbers() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(
      LOTTO_CONFIG.START,
      LOTTO_CONFIG.END,
      LOTTO_CONFIG.NOT_DUPLICATED_NUMBER
    );
    return lottoNumbers;
  }
}

export default GenerateLotto;
