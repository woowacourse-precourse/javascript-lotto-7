import { Random } from "@woowacourse/mission-utils";
import Lotto from "../models/Lotto.js";

class LottoController {
  #prizeTable = {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
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
}

export default LottoController;