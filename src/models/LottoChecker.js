import { MATCHES, PRIZE, RANK } from '../constants';
import { InputStore } from '../services';
import { LottoResult } from './';

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
      case MATCHES.three:
        return RANK.fifth;
      case MATCHES.four:
        return RANK.fourth;
      case MATCHES.five:
        if (isBonusMatch) return RANK.second;
        return RANK.third;
      case MATCHES.six:
        return RANK.first;
      default:
        return RANK.none;
    }
  }

  #calculatePrize(ranking) {
    switch (ranking) {
      case RANK.fifth:
        return PRIZE.fifth;
      case RANK.fourth:
        return PRIZE.fourth;
      case RANK.third:
        return PRIZE.third;
      case RANK.second:
        return PRIZE.second;
      case RANK.first:
        return PRIZE.first;
      default:
        return PRIZE.none;
    }
  }
}

export default LottoChecker;
