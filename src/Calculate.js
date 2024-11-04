import { Console } from '@woowacourse/mission-utils';

export class Calculate {
  #lottoList;
  #winningLotto;
  #bonusNumber;

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

  printResults() {}
}
