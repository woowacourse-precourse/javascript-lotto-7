import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoView from "./LottoView.js";
import { ERROR_MESSAGE } from "./constants.js";

class LottoController {
  #view;
  #lottos = [];

  constructor() {
    this.#view = new LottoView();
  }

  async run() {
    let purchaseAmount;
    while (true) {
      try {
        purchaseAmount = await this.#view.getPurchaseAmount();
        this.#validatePurchaseAmount(purchaseAmount);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    const count = this.#countOfLotto(purchaseAmount);
    this.#generateLottos(purchaseAmount);

    this.#view.showLottoCount(count);
    this.#view.showLottoList(this.#lottos);

    let winningNumbers;
    while (true) {
      try {
        winningNumbers = await this.#view.getWinningNumbers();
        this.#validateWinningNumbers(winningNumbers);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    let bonusNumber;
    while (true) {
      try {
        bonusNumber = await this.#view.getBonusNumber();
        this.#validateBonusNumber(winningNumbers, bonusNumber);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    const results = this.#calculateResults(winningNumbers, bonusNumber);
    this.#view.showResults(results);

    const totalProfit = this.#calculateProfit(results);
    const profitRate = this.#calculateProfitRate(totalProfit, purchaseAmount);
    this.#view.showProfit(profitRate);
  }

  #generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  #countOfLotto(amount) {
    return Math.floor(amount / 1000);
  }

  #generateLottos(amount) {
    const lottoCount = this.#countOfLotto(amount);
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

  #validatePurchaseAmount(amount) {
    const purchaseAmount = Number(amount);
    if (isNaN(amount)) throw new Error(ERROR_MESSAGE.NOT_NUMBER_PRICE);
    if (purchaseAmount < 1000) throw new Error(ERROR_MESSAGE.UNDER_PRICE);
    if (purchaseAmount % 1000 !== 0) throw new Error(ERROR_MESSAGE.NOT_PRICE);
  }

  #validateWinningNumbers(winningNumbers) {
    if (winningNumbers.length !== 6)
      throw new Error(ERROR_MESSAGE.OVER_LENGTH_WINNING_NUMBER);
    if (winningNumbers.some((num) => isNaN(num) || num < 1 || num > 45))
      throw new Error(ERROR_MESSAGE.NOT_WINNING_NUMBER_RANGE);
    if (new Set(winningNumbers).size !== 6)
      throw new Error(ERROR_MESSAGE.DUPLICATE_WINNING_NUMBER);
  }

  #validateBonusNumber(winningNumbers, bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGE.NOT_BONUS_NUMBER_RANGE);
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
    }
  }
}

export default LottoController;
