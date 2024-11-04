import { PRIZE_AMOUNTS } from '../constant/constant.js';

class LottoResult {
  static calculate(lottos, winningNumbers, bonusNumber) {
    const result = this.initializeResult();

    lottos.forEach((lotto) => {
      const matchCount = this.countMatchingNumbers(lotto, winningNumbers);
      const isBonusMatch = this.isBonusNumberMatch(lotto, bonusNumber);
      this.updateResult(result, matchCount, isBonusMatch);
    });

    return result;
  }

  static initializeResult() {
    return { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
  }

  static countMatchingNumbers(lotto, winningNumbers) {
    return lotto.numbers.filter(num => winningNumbers.includes(num)).length;
  }

  static isBonusNumberMatch(lotto, bonusNumber) {
    return lotto.numbers.includes(bonusNumber);
  }

  static updateResult(result, matchCount, isBonusMatch) {
    if (matchCount === 6) result.first += 1;
    else if (matchCount === 5 && isBonusMatch) result.second += 1;
    else if (matchCount === 5) result.third += 1;
    else if (matchCount === 4) result.fourth += 1;
    else if (matchCount === 3) result.fifth += 1;
  }

  static calculateEarningsRate(result, purchaseAmount) {
    const totalEarnings = (
      result.first * 2000000000 +
      result.second * 30000000 +
      result.third * 1500000 +
      result.fourth * 50000 +
      result.fifth * 5000
    );

    const earningsRate = (totalEarnings / purchaseAmount) * 100;

    return Math.round(earningsRate * 100) / 100;
  }
}

export default LottoResult;
