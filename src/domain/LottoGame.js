import Lotto from "./Lotto.js";
import LOTTO_CONFIG from "../static/LottoConfig.js";
import RandomLotto from "../utils/RandomLotto.js";

class LottoGame {
  #lottos = [];
  #winningLotto;
  #bonusNumber;

  purchaseLottos(amount) {
    const count = Math.floor(amount / LOTTO_CONFIG.price.UNIT);
    this.#generateLottos(count);
    return count;
  }

  #generateLottos(count) {
    for (let i = 0; i < count; i++) {
      const numbers = RandomLotto.generateLottoNumbers();
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto);
    }
  }

  getLottos() {
    return this.#lottos;
  }

  setWinningNumbers(numbers, bonusNumber) {
    this.#winningLotto = new Lotto(numbers);
    this.#bonusNumber = bonusNumber;
  }

  calculateResults() {
    const results = { 3: 0, 4: 0, 5: 0, "5+": 0, 6: 0 };

    this.#lottos.forEach((lotto) => {
      const matchCount = lotto.match(this.#winningLotto.getNumbers());
      this.#updateWinningRank(results, matchCount, lotto);
    });

    return results;
  }

  #updateWinningRank(results, matchCount, lotto) {
    if (matchCount === 6) {
      results[6]++;
      return;
    }
    if (matchCount === 5 && lotto.contains(this.#bonusNumber)) {
      results["5+"]++;
      return;
    }
    if (matchCount >= 3) {
      results[matchCount]++;
    }
  }

  calculateProfitRate(results) {
    const totalPrize = this.#calculateTotalPrize(results);
    const purchaseAmount = this.#lottos.length * LOTTO_CONFIG.price.UNIT;
    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  }

  #calculateTotalPrize(results) {
    return (
      results[3] * LOTTO_CONFIG.prize.THREE +
      results[4] * LOTTO_CONFIG.prize.FOUR +
      results[5] * LOTTO_CONFIG.prize.FIVE +
      results["5+"] * LOTTO_CONFIG.prize.FIVE_BONUS +
      results[6] * LOTTO_CONFIG.prize.SIX
    );
  }
}

export default LottoGame;
