import { RANKS } from "./Constants.js";

class RankChecker {
  static checkMatch(purchasedLottos, winningAndBonusNumber) {
    const matchCounts = [];
    purchasedLottos.forEach((lotto) => {
      const [count, bonusMatch] = this.#countMatchingNumbers(
        lotto,
        winningAndBonusNumber
      );
      matchCounts.push([count, bonusMatch]);
    });
    return matchCounts;
  }

  // 로또 1개에 대한 match 여부 확인하는 메서드
  static #countMatchingNumbers(lotto, winningAndBonusNumber) {
    const [winningNumber, bonusNumber] = winningAndBonusNumber;
    let bonusMatch = false;
    let count = 0;
    winningNumber.forEach((number) => {
      if (lotto.includes(number)) {
        count++;
      }
      if (lotto.includes(bonusNumber)) {
        bonusMatch = true;
      }
    });
    return [count, bonusMatch];
  }

  static getRank(matchCounts) {
    const resultObj = this.#initializeResultObj();

    matchCounts.forEach(([count, bonusMatch]) => {
      const rank = this.#determineRank(count, bonusMatch);
      resultObj[rank] += 1;
    });

    return resultObj;
  }

  static #initializeResultObj() {
    return {
      [RANKS.FIRST]: 0,
      [RANKS.SECOND]: 0,
      [RANKS.THIRD]: 0,
      [RANKS.FOURTH]: 0,
      [RANKS.FIFTH]: 0,
      [RANKS.SIXTH]: 0,
    };
  }

  static #determineRank(count, bonusMatch) {
    if (count === 6) return RANKS.FIRST;
    if (count === 5 && bonusMatch) return RANKS.SECOND;
    if (count === 5 && !bonusMatch) return RANKS.THIRD;
    if (count === 4) return RANKS.FOURTH;
    if (count === 3) return RANKS.FIFTH;
    return RANKS.SIXTH;
  }
}

export default RankChecker;
