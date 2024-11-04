import { Random } from "@woowacourse/mission-utils";

export default class Lotto {
  static MIN_LOTTO_NUMBER = 1;
  static MAX_LOTTO_NUMBER = 45;

  generateLottoNumbers() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(Lotto.MIN_LOTTO_NUMBER, Lotto.MAX_LOTTO_NUMBER, 6);
    return lottoNumbers;
  }
}