import { Random } from '@woowacourse/mission-utils';

class GenerateLotto {
  /**
   * 로또 번호를 생성
   * @returns {number[]}
   */
  static createRandomNumbers() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNumbers;
  }
}

export default GenerateLotto;
