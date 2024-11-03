import { InputStorage } from '../services/index.js';

class LottoChecker {
  constructor() {
    this.storage = new InputStorage();
  }

  checkLotto(lotto) {
    const numbers = lotto.getNumbers();
    const matchCount = this.#matchNumbers(numbers, storage.getMainNumbers());
    const isBonusMatch = this.#matchBonus(numbers, storage.getBonusNumber());
    const ranking = this.#rank({ matchCount, isBonusMatch });
    const prizeMoney = this.#calculatePrize(ranking);

    const lottoData = {
      numbers,
      matchCount,
      isBonusMatch,
      prizeMoney,
    };

    return new LottoResult(lottoData);
  }

  #matchNumbers(numbers, mainNumbers) {}
  #matchBonus(numbers, bonusNumber) {}
  #rank({ matchCount, isBonusMatch }) {}
  #calculatePrize(ranking) {}
}

export default LottoChecker;
