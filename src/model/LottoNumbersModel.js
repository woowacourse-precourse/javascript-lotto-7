import { MissionUtils } from "@woowacourse/mission-utils";

class LottoNumbersModel {
  constructor() {}
  generate(lottoPrice) {
    const lottoCount = lottoPrice / 1000;
    let lottoNumbers = [];
    for (let count = 0; count < lottoCount; count++) {
      const tempNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.push(tempNumber);
    }
    return lottoNumbers;
  }
}

export default LottoNumbersModel;
