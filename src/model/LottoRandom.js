import { MissionUtils } from "@woowacourse/mission-utils";

class LottoRandom {
  async lottoRandomNumber(purchaseAmount) {
    const lottoNumbers = Array.from({ length: purchaseAmount }, () => {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      return numbers.sort((a, b) => a - b);
    });
    return lottoNumbers;
  }
}

export default LottoRandom;
