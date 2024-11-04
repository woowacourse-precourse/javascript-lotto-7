import { MissionUtils } from "@woowacourse/mission-utils";

class LottoGenerator {
  generateLottoNumbers(purchaseAmount) {
    const randomLotto = [];
    for (let i = 0; i < purchaseAmount; ++i) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);
      randomLotto.push(lottoNumbers);
    }

    return randomLotto;
  }
}

export default LottoGenerator;
