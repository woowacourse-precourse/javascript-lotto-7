import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoView from "./LottoView.js";

class LottoController {
  #view;
  #lottos = [];

  constructor() {
    this.#view = new LottoView();
  }

  async run() {
    const purchaseAmount = await this.#view.getPurchaseAmount();
    this.#generateLottos(purchaseAmount);
    this.#view.showLottoList(this.#lottos);

    const winningNumbers = await this.#view.getWinningNumbers();
    const bonusNumber = await this.#view.getBonusNumber();

    const results = this.#calculateResults(winningNumbers, bonusNumber);
    this.#view.showResults(results);

    const totalProfit = this.#calculateProfit(results);
    const profitRate = this.#calculateProfitRate(totalProfit, purchaseAmount);
    this.#view.showProfit(profitRate);
  }

  #generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  #generateLottos(amount) {
    const lottoCount = Math.floor(amount / 1000);
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = this.#generateRandomNumbers();
      this.#lottos.push(new Lotto(lottoNumbers));
    }
  }

  #calculateResults(winningNumbers, bonusNumber) {
    const result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    this.#lottos.forEach((lotto) => {
      const matchCount = lotto
        .getNumbers()
        .filter((num) => winningNumbers.includes(num)).length;
      const isBonus = lotto.getNumbers().includes(bonusNumber);

      if (matchCount === 6) result[1]++;
      else if (matchCount === 5 && isBonus) result[2]++;
      else if (matchCount === 5) result[3]++;
      else if (matchCount === 4) result[4]++;
      else if (matchCount === 3) result[5]++;
    });

    return result;
  }

  #calculateProfit(results) {
    const prizeMap = {
      1: 2000000000, // 1등 상금 20억
      2: 30000000, // 2등 상금 3천만
      3: 1500000, // 3등 상금 150만
      4: 50000, // 4등 상금 5만
      5: 5000, // 5등 상금 5천
    };

    const totalProfit = Object.entries(results).reduce((acc, [rank, count]) => {
      return acc + count * prizeMap[rank];
    }, 0);

    return totalProfit;
  }

  #calculateProfitRate(totalProfit, purchaseAmount) {
    return ((totalProfit / purchaseAmount) * 100).toFixed(1);
  }
}

export default LottoController;
