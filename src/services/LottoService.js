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
      const lottoNumber = generateLandomNumber(1, 45, 6);
      this.#lottos.push(new Lotto(lottoNumber));
    }
  }

  compareLottos(winningNumbers, bonusNumber) {
    const matchCounts = {
      3: 0,
      4: 0,
      5: 0,
      bonus: 0,
      6: 0,
    };

    this.#lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const { winningCnt, bonusHit } = this.#checkWinningAndBonus(
        lottoNumbers,
        winningNumbers,
        bonusNumber
      );

      if (winningCnt > 2) {
        matchCounts[bonusHit ? "bonus" : winningCnt]++;
      }
    });

    return matchCounts;
  }

  #checkWinningAndBonus(lottoNumbers, winningNumbers, bonusNumber) {
    const winningCnt = lottoNumbers.filter((num) =>
      winningNumbers.includes(num)
    ).length;
    const bonusHit = winningCnt === 5 && lottoNumbers.includes(bonusNumber);

    return { winningCnt, bonusHit };
  }

  calculateProfit(matchCounts, amount) {
    const prizeMapping = {
      3: 5000,
      4: 50000,
      5: 1500000,
      bonus: 30000000,
      6: 2000000000,
    };

    const prize = Object.keys(matchCounts).reduce((total, key) => {
      return total + (matchCounts[key] * prizeMapping[key] || 0);
    }, 0);

    return ((prize / amount) * 100).toFixed(1);
  }
}

export default LottoService;
