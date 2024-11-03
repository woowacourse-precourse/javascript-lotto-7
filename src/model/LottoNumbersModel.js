import { MissionUtils } from "@woowacourse/mission-utils";

const MIN_RANGE = 1;
const MAX_RANGE = 45;
const LOTTO_COUNT = 6;
const LOTTO_UNIT_PRICE = 1000;

class LottoNumbersModel {
  constructor() {}
  getCount(lottoPrice) {
    const lottoCount = lottoPrice / LOTTO_UNIT_PRICE;
    return lottoCount;
  }
  generate(lottoCount) {
    let lottoNumbers = [];
    for (let count = 0; count < lottoCount; count++) {
      const tempNumber = MissionUtils.Random.pickUniqueNumbersInRange(
        MIN_RANGE,
        MAX_RANGE,
        LOTTO_COUNT
      );
      tempNumber.sort((a, b) => a - b);
      lottoNumbers.push(tempNumber);
    }
    return lottoNumbers;
  }
}

export default LottoNumbersModel;
