import { Random } from "@woowacourse/mission-utils";
import Lotto from "../models/Lotto.js";

class LottoController {
  #prizeTable = {
    first: 2000000000,
    second: 30000000,
    third: 1500000,
    fourth: 50000,
    fifth: 5000,
  };

  generateLottos(purchaseAmount) {
    const lottos = [];
    const count = purchaseAmount / 1000;

    for (let i = 0; i < count; i++) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      const lotto = new Lotto(randomNumbers);
      lottos.push(lotto);
    }

    return lottos;
  }

  extractWinningNumbers(winningNumbersInput) {
    return winningNumbersInput.split(',').map(Number);
  }

  calculateWinningLotto(lottos, winningNumbers, bonusNumber) {
    return lottos.reduce((results, lotto) => {
      const matchCount = this.#countMatchingNumbers(lotto.LottoNumbers, winningNumbers);
      const rank = this.#getRank(matchCount, lotto, bonusNumber);
      results[rank]++;
      return results;
    }, { first: 0, second: 0, third: 0, fourth: 0, fifth: 0, noPrize: 0 })
  }

  #countMatchingNumbers(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((num) => winningNumbers.includes(num)).length;
  }

  #getRank(matchCount, lotto, bonusNumber) {
    if (matchCount === 6) return 'first';
    if (matchCount === 5 && lotto.LottoNumbers.includes(bonusNumber)) return 'second';
    if (matchCount === 5) return 'third';
    if (matchCount === 4) return 'fourth';
    if (matchCount === 3) return 'fifth';
    return 'noPrize';
  }

  calculateRateOfReturn(purchaseAmount, resultPrize) {
    const totalPrize = Object.keys(resultPrize).reduce((sum, rank) => {
      const prize = this.#prizeTable[rank] || 0;
      return sum + prize * resultPrize[rank];
    }, 0);

    const rateOfReturn = (totalPrize / purchaseAmount) * 100;
    return rateOfReturn;
  }
}

export default LottoController;