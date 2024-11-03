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
    const matchCounts = { 3: 0, 4: 0, 5: 0, bonus: 0, 6: 0 };

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
    const prize = Object.keys(matchCounts).reduce((total, key) => {
      const prizeForMatch = this.#getPrizeForMatch(key);
      return total + matchCounts[key] * prizeForMatch;
    }, 0);

    return ((prize / amount) * 100).toFixed(1);
  }

  #checkWinningAndBonus(lottoNumbers, winningNumbers, bonusNumber) {
    const winningCnt = lottoNumbers.filter((num) =>
      winningNumbers.includes(num)
    ).length;
    const bonusHit = winningCnt === 5 && lottoNumbers.includes(bonusNumber);

    return { winningCnt, bonusHit };
  }

  #getMatchCountKey(winningCnt, bonusHit) {
    if (winningCnt === 5 && bonusHit) return "bonus";
    if (winningCnt > 2) return winningCnt;
  }

  #getPrizeForMatch(key) {
    if (key === "bonus") return RANKS.SECOND.prize;

    const rankKey = Object.keys(RANKS).find((r) => RANKS[r].match == key);
    if (rankKey) return RANKS[rankKey].prize;

    return 0;
  }
}

export default LottoService;
