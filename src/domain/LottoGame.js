import LOTTO_GAME from "../constants/lottoGame.js";

class LottoGame {
  #lottos;
  #result;
  #winningLotto;
  #bonusNumber;

  constructor(lottos, bonusNumber, winningLotto) {
    this.#lottos = lottos;
    this.#result = Array(5).fill(0);
    this.#winningLotto = winningLotto;
    this.#bonusNumber = bonusNumber;
    this.#checkLottos();
  }

  lottoCount() {
    return this.#lottos.length;
  }

  #checkUnitLotto(lotto) {
    const matchCount = lotto.checkCount(this.#winningLotto);

    if (matchCount < 3) {
      return;
    }
    if (matchCount !== 5) {
      this.#result[LOTTO_GAME.NUMBER_COUNT - matchCount] =
        this.#result[LOTTO_GAME.NUMBER_COUNT - matchCount] + 1 || 1;
      return;
    }
    if (lotto.checkCount(this.#bonusNumber) === 1) {
      this.#result[LOTTO_GAME.NUMBER_COUNT - matchCount] =
        this.#result[LOTTO_GAME.NUMBER_COUNT - matchCount] + 1 || 1;
      return;
    }
    this.#result[LOTTO_GAME.NUMBER_COUNT + 1 - matchCount] =
      this.#result[LOTTO_GAME.NUMBER_COUNT + 1 - matchCount] + 1 || 1;
  }

  #checkLottos() {
    this.#lottos.forEach((lotto) => this.#checkUnitLotto(lotto));
  }

  totalIncome() {
    return this.#result.reduce((acc, count, index) => {
      return acc + count * LOTTO_GAME.WINNING_MONEY[index];
    }, 0);
  }

  get result() {
    return this.#result;
  }
}

export default LottoGame;
