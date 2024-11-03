import LottoGame from './LottoGame.js';
import Lotto from './Lotto.js';

class Calculator {
  /** @type {LottoGame} */
  #game;

  /** @type {Lotto[]} */
  #lottoList;

  /**
   * @param {LottoGame} game
   * @param {Lotto[]} lottoList
   */
  constructor(game, lottoList) {
    this.#game = game;
    this.#lottoList = lottoList;
  }

  #computeRankList() {
    return this.#lottoList.map((lotto) => this.#game.rankFinder(lotto));
  }
}

export default Calculator;
