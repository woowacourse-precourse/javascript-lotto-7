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

  printResults() {}
}
