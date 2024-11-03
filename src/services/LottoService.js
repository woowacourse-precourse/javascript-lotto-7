import LOTTO from "../constants/lotto.js";
import RANKS from "../constants/rank.js";
import Lotto from "../model/Lotto.js";
import generateLandomNumber from "../utils/generateLandomNum.js";

class LottoService {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  getLottos() {
    return [...this.#lottos];
  }

  generateLottos(count) {
    for (let i = 0; i < count; i++) {
      const lottoNumber = generateLandomNumber(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.COUNT
      );
      this.#lottos.push(new Lotto(lottoNumber));
    }
  }

  compareLottos(winningNumbers, bonusNumber) {
    const matchCounts = { FIFTH: 0, FOURTH: 0, THIRD: 0, SECOND: 0, FIRST: 0 };

    this.#lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const { winningCnt, bonusHit } = this.#checkWinningAndBonus(
        lottoNumbers,
        winningNumbers,
        bonusNumber
      );
      const key = this.#getMatchCountKey(winningCnt, bonusHit);
      if (key) matchCounts[key]++;
    });
    return matchCounts;
  }

  calculateProfit(matchCounts, amount) {
    const totalPrize = Object.keys(matchCounts).reduce((total, key) => {
      const prize = RANKS[key].prize || 0;
      return total + matchCounts[key] * prize;
    }, 0);

    return ((totalPrize / amount) * 100).toFixed(1);
  }

  #checkWinningAndBonus(lottoNumbers, winningNumbers, bonusNumber) {
    const winningCnt = lottoNumbers.filter((num) =>
      winningNumbers.includes(num)
    ).length;
    const bonusHit = winningCnt === 5 && lottoNumbers.includes(bonusNumber);

    return { winningCnt, bonusHit };
  }

  #getMatchCountKey(winningCnt, bonusHit) {
    return Object.keys(RANKS).find((key) => {
      const rank = RANKS[key];
      return rank.match === winningCnt && rank.bonus === bonusHit;
    });
  }
}

export default LottoService;
