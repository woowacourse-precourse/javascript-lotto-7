import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRIZE_LIST } from '../Constants.js';
import { formatKRW } from '../Utils.js';

class Output {
  /** @param {number[][]} allNumbers */
  static printLottoNumbersAll(allNumbers) {
    Output.#printNumberOfPurchase(allNumbers.length);
    allNumbers.forEach(Output.#printLottoNumbers);
  }

  /** @param {number[]} numbers */
  static #printLottoNumbers(numbers) {
    Console.print(`[${numbers.join(', ')}]`);
  }

  /** @param {number} length */
  static #printNumberOfPurchase(length) {
    Console.print(`\n${length}개를 구매했습니다.`);
  }

  /** @param {number[]} winningCountList */
  static printStatistics(winningCountList) {
    Output.#printStatisticsTitle();
    [...winningCountList].reverse().forEach((winningCount, i) => {
      const rankIndex = LOTTO_PRIZE_LIST.length - (i + 1);
      Output.#printRankAndCount(winningCount, rankIndex);
    });
  }

  /**
   * @param {number} winningCount
   * @param {number} rank
   */
  static #printRankAndCount(winningCount, rank) {
    const prize = LOTTO_PRIZE_LIST[rank];
    const comment = Output.#getPrizeComment(winningCount, prize);

    Console.print(comment);
  }

  /**
   * @param {number} winningCount
   * @param {(typeof LOTTO_PRIZE_LIST)[number]} prize
   */
  static #getPrizeComment(winningCount, { count, bonus, cash }) {
    if (bonus) {
      return `${count}개 일치, 보너스 볼 일치 (${formatKRW(cash)}원) - ${winningCount}개`;
    }

    return `${count}개 일치 (${formatKRW(cash)}원) - ${winningCount}개`;
  }

  static #printStatisticsTitle() {
    Console.print('\n당첨 통계\n---');
  }

  /** @param {number} rate */
  static printTotalProfitRate(rate) {
    Console.print(`총 수익률은 ${Math.round(rate * 100) / 100}%입니다.`);
  }
}

export default Output;
