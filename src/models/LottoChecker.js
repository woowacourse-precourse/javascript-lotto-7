import { InputStore } from '../services/index.js';
import { LottoResult } from './index.js';

class LottoChecker {
  constructor() {
    this.store = new InputStore();
  }

  checkLotto(lotto) {
    const numbers = lotto.getNumbers();
    const matchCount = this.#matchNumbers(numbers, this.store.getMainNumbers());
    const isBonusMatch = this.#matchBonus(numbers, this.store.getBonusNumber());
    const ranking = this.#rank(matchCount, isBonusMatch);
    const prizeMoney = this.#calculatePrize(ranking);

    const lottoData = {
      numbers,
      matchCount,
      isBonusMatch,
      ranking,
      prizeMoney,
    };

    return new LottoResult(lottoData);
  }

  #matchNumbers(numbers, mainNumbers) {
    return numbers.reduce((acc, cur) => acc + Number(mainNumbers.includes(cur)), 0);
  }

  #matchBonus(numbers, bonusNumber) {
    return numbers.includes(bonusNumber);
  }

  #rank(matchCount, isBonusMatch) {
    switch (matchCount) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        if (isBonusMatch) return 2;
        return 3;
      case 6:
        return 1;
      default:
        return 0;
    }
  }

  #calculatePrize(ranking) {
    switch (ranking) {
      case 5:
        return 5_000;
      case 4:
        return 50_000;
      case 3:
        return 1_500_000;
      case 2:
        return 30_000_000;
      case 1:
        return 2_000_000_000;
      default:
        return 0;
    }
  }
}

export default LottoChecker;
