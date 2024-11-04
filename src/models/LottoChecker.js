import { CONFIG, MATCHES, PRIZE, RANKS } from '../constants/index.js';
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
    return numbers.reduce((acc, cur) => acc + Number(mainNumbers.includes(cur)), CONFIG.initialMatchCount);
  }

  #matchBonus(numbers, bonusNumber) {
    return numbers.includes(bonusNumber);
  }

  #rank(matchCount, isBonusMatch) {
    switch (matchCount) {
      case MATCHES.three:
        return RANKS.fifth;
      case MATCHES.four:
        return RANKS.fourth;
      case MATCHES.five:
        if (isBonusMatch) return RANKS.second;
        return RANKS.third;
      case MATCHES.six:
        return RANKS.first;
      default:
        return RANKS.none;
    }
  }

  #calculatePrize(ranking) {
    switch (ranking) {
      case RANKS.fifth:
        return PRIZE.fifth;
      case RANKS.fourth:
        return PRIZE.fourth;
      case RANKS.third:
        return PRIZE.third;
      case RANKS.second:
        return PRIZE.second;
      case RANKS.first:
        return PRIZE.first;
      default:
        return PRIZE.none;
    }
  }
}

export default LottoChecker;
