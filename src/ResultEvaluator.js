import { Console } from '@woowacourse/mission-utils';

class ResultEvaluator {
  static evaluateResults(lottos, winningNumbers, bonusNumber) {
    const resultCounts = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
      NONE: 0,
    };

    lottos.forEach((lotto) => {
      const matchCount = this.getMatchCount(lotto.getNumbers(), winningNumbers);
      const hasBonus = lotto.getNumbers().includes(bonusNumber);

      if (matchCount === 6) {
        resultCounts.FIRST++;
      } else if (matchCount === 5 && hasBonus) {
        resultCounts.SECOND++;
      } else if (matchCount === 5) {
        resultCounts.THIRD++;
      } else if (matchCount === 4) {
        resultCounts.FOURTH++;
      } else if (matchCount === 3) {
        resultCounts.FIFTH++;
      } else {
        resultCounts.NONE++;
      }
    });

    return resultCounts;
  }

  static getMatchCount(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter(number => winningNumbers.includes(number)).length;
  }

  static printResults(resultCounts) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${resultCounts.FIFTH}개`);
    Console.print(`4개 일치 (50,000원) - ${resultCounts.FOURTH}개`);
    Console.print(`5개 일치 (1,500,000원) - ${resultCounts.THIRD}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultCounts.SECOND}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${resultCounts.FIRST}개`);
  }
}

export default ResultEvaluator;