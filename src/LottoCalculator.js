import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from './lib/constant.js';

class LottoCalculator {
  #result = {
    three: 0,
    four: 0,
    five: 0,
    fiveBonus: 0,
    six: 0,
  };

  #ROI = 0;

  constructor(buyPrice, lottos, winningNumbers, bonusNumber) {
    this.buyPrice = buyPrice;
    this.lottos = lottos;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.calculateResult(lottos, winningNumbers, bonusNumber);
    this.calculateROI(buyPrice);
  }

  calculateResult(lottos) {
    lottos.forEach((lotto) => {
      const matchCount = this.calculateMatchCount(lotto);
      if (matchCount === 3) this.#result.three += 1;
      if (matchCount === 4) this.#result.four += 1;
      if (matchCount === 5 && !this.matchBonusNumber(lotto))
        this.#result.five += 1;
      if (matchCount === 5 && this.matchBonusNumber(lotto))
        this.#result.fiveBonus += 1;
      if (matchCount === 6) this.#result.six += 1;
    });
  }

  calculateMatchCount(lotto) {
    return lotto.filter((number) => this.winningNumbers.includes(number))
      .length;
  }

  matchBonusNumber(lotto) {
    if (lotto.includes(parseInt(this.bonusNumber, 10))) {
      return true;
    }
    return false;
  }

  calculateROI(buyPrice) {
    const totalPrize =
      this.#result.three * 5000 +
      this.#result.four * 50000 +
      this.#result.five * 1500000 +
      this.#result.fiveBonus * 30000000 +
      this.#result.six * 2000000000;

    const ROI = totalPrize / buyPrice;
    this.#ROI = ROI;
  }

  showResult() {
    Console.print(`${OUTPUT_MESSAGE.WINNING_STATISTICS}`);
    Console.print(`${OUTPUT_MESSAGE.MATCH_THREE} - ${this.#result.three}개`);
    Console.print(`${OUTPUT_MESSAGE.MATCH_FOUR} - ${this.#result.four}개`);
    Console.print(`${OUTPUT_MESSAGE.MATCH_FIVE} - ${this.#result.five}개`);
    Console.print(
      `${OUTPUT_MESSAGE.MATCH_FIVE_BONUS} - ${this.#result.fiveBonus}개`,
    );
    Console.print(`${OUTPUT_MESSAGE.MATCH_SIX} - ${this.#result.six}개`);
    Console.print(`${OUTPUT_MESSAGE.ROI}${this.#ROI * 100}%입니다.`);
  }
}

export default LottoCalculator;
