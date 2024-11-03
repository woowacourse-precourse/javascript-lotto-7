import { LOTTO_PRIZE_LIST } from '../Constants.js';
import LottoGame from './LottoGame.js';
import Lotto from './Lotto.js';

class Calculator {
  /** @type {LottoGame} */
  #game;

  /** @type {Lotto[]} */
  #lottoList;

  /** @type {number[]} */
  #winningCountList;

  /**
   * @param {LottoGame} game
   * @param {Lotto[]} lottoList
   */
  constructor(game, lottoList) {
    this.#game = game;
    this.#lottoList = lottoList;
    this.#init();
  }

  /** @param {(winningCountList: number[]) => void | undefined} printer */
  computeWinningCountList(printer) {
    printer?.(this.#winningCountList);

    return this.#winningCountList;
  }

  /**
   * @param {number} money
   * @param {(rate: number) => void | undefined} printer
   */
  computeTotalProfitRate(money, printer) {
    const totalCash = this.#computeTotalCash();
    const totalProfitRate = (totalCash / money) * 100;

    printer?.(totalProfitRate);

    return totalProfitRate;
  }

  #init() {
    const rankList = this.#computeRankList();

    this.#winningCountList = LOTTO_PRIZE_LIST.map((_, i) => {
      return rankList.filter((rank) => rank === i).length;
    });
  }

  #computeRankList() {
    return this.#lottoList.map((lotto) => this.#game.rankFinder(lotto));
  }

  #computeTotalCash() {
    return this.#winningCountList.reduce((total, winningCount, rank) => {
      const { cash } = LOTTO_PRIZE_LIST[rank];
      const earnedCash = cash * winningCount;

      return total + earnedCash;
    }, 0);
  }
}

export default Calculator;
