import { Console } from '@woowacourse/mission-utils';

export class Calculate {
  #lottoList;
  #winningLotto;
  #bonusNumber;
  #PRIZE_MONEY = {
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000,
  };

  constructor(lottoList, winningLotto, bonusNumber) {
    this.#lottoList = lottoList;
    this.#winningLotto = winningLotto;
    this.#bonusNumber = bonusNumber;
  }

  #getMatchCount(lotto) {
    return this.#winningLotto.filter((number) => lotto.includes(number)).length;
  }

  #hasBonus(lotto) {
    return lotto.includes(this.#bonusNumber);
  }

  #getPrizeRank(matchCount, hasBonus) {
    if (matchCount === 6) return 1;
    if (matchCount === 5 && hasBonus) return 2;
    if (matchCount === 5) return 3;
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;
    return 0;
  }

  #getPrizeMoney(rank) {
    const money = {
      1: this.#PRIZE_MONEY.FIRST,
      2: this.#PRIZE_MONEY.SECOND,
      3: this.#PRIZE_MONEY.THIRD,
      4: this.#PRIZE_MONEY.FOURTH,
      5: this.#PRIZE_MONEY.FIFTH,
    };
    return money[rank] || 0;
  }

  #calculateResult(lotto) {
    const matchCount = this.#getMatchCount(lotto);
    const hasBonus = matchCount === 5 && this.#hasBonus(lotto);
    const rank = this.#getPrizeRank(matchCount, hasBonus);
    return { rank, prize: this.#getPrizeMoney(rank) };
  }

  #calculateAllResults() {
    const winningStats = [0, 0, 0, 0, 0];
    let totalPrize = 0;

    for (const lotto of this.#lottoList) {
      const { rank, prize } = this.#calculateResult(lotto);
      if (rank > 0) {
        winningStats[5 - rank]++;
        totalPrize += prize;
      }
    }

    return { winningStats, totalPrize };
  }

  #calculateReturnRate(totalPrize) {
    const totalCost = this.#lottoList.length * 1000;
    return ((totalPrize / totalCost) * 100).toFixed(1);
  }

  printResults() {
    const { winningStats, totalPrize } = this.#calculateAllResults();
    const returnRate = this.#calculateReturnRate(totalPrize);

    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${winningStats[4]}개`);
    Console.print(`4개 일치 (50,000원) - ${winningStats[3]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningStats[2]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningStats[1]}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${winningStats[0]}개`);
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }
}
