import { Random } from "@woowacourse/mission-utils";
import { LOTTO_RULES } from "../constants/index.js";

class LottoStore {
  static getLottoPurchaseCount = (price) => {
    return price / LOTTO_RULES.PRICE;
  };

  /**
   * 주어진 범위 내에서 고유한 로또 번호를 생성합니다.
   *
   * @param {number} min - 생성할 번호의 최소값
   * @param {number} max - 생성할 번호의 최대값
   * @param {number} count - 생성할 번호의 개수
   * @param {string} [sortOption] - 정렬 옵션: 'asc'(오름차순), 'desc'(내림차순), 또는 정렬하지 않음(기본값)
   * @returns {number[]} 생성된 로또 번호 배열
   */
  static generateSingleLotto = (min, max, count, sortOption) => {
    const numbers = Random.pickUniqueNumbersInRange(min, max, count);

    switch (sortOption) {
      case "asc":
        return numbers.sort((a, b) => a - b);

      case "desc":
        return numbers.sort((a, b) => b - a);

      default:
        return numbers;
    }
  };

  static generateLottoNumbers = (count) => {
    const { MIN_RANGE, MAX_RANGE, NUMBERS_SIZE } = LOTTO_RULES;
    return Array.from({ length: count }, () => this.generateSingleLotto(MIN_RANGE, MAX_RANGE, NUMBERS_SIZE, "asc"));
  };

  static getLottoNumbers = (price) => {
    const purchaseCount = this.getLottoPurchaseCount(price);
    return this.generateLottoNumbers(purchaseCount);
  };
}

export default LottoStore;
