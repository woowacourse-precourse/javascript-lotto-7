import { MissionUtils } from "@woowacourse/mission-utils";

class LottoNumbersModel {
  constructor() {}
  getCount(lottoPrice) {
    const lottoCount = lottoPrice / 1000;
    return lottoCount;
  }
  generate(lottoCount) {
    let lottoNumbers = [];
    for (let count = 0; count < lottoCount; count++) {
      const tempNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      tempNumber.sort((a, b) => a - b);
      lottoNumbers.push(tempNumber);
    }
    return lottoNumbers;
  }
}

export default LottoNumbersModel;
