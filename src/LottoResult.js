/**
 * @class LottoResult
 * @description 로또 결과를 관리하고 등수 및 당첨 금액을 계산하는 클래스
 */
class LottoResult {
  /**
   * @constructor
   * @description 등수와 해당 등수의 상금을 초기화
   */
  constructor() {
    this.ranks = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    this.rankPrizes = {
      1: 2000000000,
      2: 30000000,
      3: 1500000,
      4: 50000,
      5: 5000,
    };
  }

  /**
   * 사용자 로또와 당첨 번호, 보너스 번호를 비교하여 각 등수별로 당첨된 횟수를 계산
   * @param {number[][]} userLotto - 사용자가 구매한 로또 티켓 배열
   * @param {number[]} lottoNumbers - 당첨 번호 배열
   * @param {number} lottoBonusNumber - 보너스 번호
   */
  calculateRank(userLotto, lottoNumbers, lottoBonusNumber) {
    userLotto.forEach((ticket) => {
      const matchingNumbers = ticket.filter((num) =>
        lottoNumbers.includes(num)
      ).length;
      const matchingBonus = ticket.includes(lottoBonusNumber);

      const rank = this.getRank(matchingNumbers, matchingBonus);
      if (rank) this.ranks[rank] += 1;
    });
  }

  /**
   * 당첨 금액을 계산
   * @returns {number} 총 당첨 금액
   */
  calculateWinningAmount() {
    let totalWinningAmount = 0;
    for (const rank in this.ranks) {
      totalWinningAmount += this.ranks[rank] * this.rankPrizes[rank];
    }
    return totalWinningAmount;
  }

  /**
   * @description 수익률을 계산
   * @param {number} totalWinningAmount - 총 당첨 금액
   * @param {number} purchaseAmount - 로또 구매 금액
   * @returns {number} 수익률
   */
  calculateProfitRate(totalWinningAmount, purchaseAmount) {
    const profitRate = (totalWinningAmount / purchaseAmount) * 100;
    return Math.round(profitRate * 10) / 10;
  }

  /**
   * @description 당첨 개수와 보너스 일치 여부를 기반으로 등수를 반환
   * @param {number} matchingNumbers - 일치하는 숫자 개수
   * @param {boolean} matchingBonus - 보너스 번호 일치 여부
   * @returns {number|null} 등수 (1~5)
   */
  getRank(matchingNumbers, matchingBonus) {
    if (matchingNumbers === 6) return 1;
    if (matchingNumbers === 5 && matchingBonus) return 2;
    if (matchingNumbers === 5) return 3;
    if (matchingNumbers === 4) return 4;
    if (matchingNumbers === 3) return 5;
    return null;
  }
}

export default LottoResult;
