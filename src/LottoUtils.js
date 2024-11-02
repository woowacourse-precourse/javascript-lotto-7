import { MissionUtils } from "@woowacourse/mission-utils";

class LottoUtils {
  static range(count, value) {
    return Array(count).fill(value || '');
  }

  static compareNumbers(a, b) {
    return a - b;
  }

  static getSortNumber(array) {
    return array.sort(this.compareNumbers);
  }

  static getParsingNumber(array) {
    return array.map((el) => parseInt(el, 10));
  }

  static getLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoUtils;
