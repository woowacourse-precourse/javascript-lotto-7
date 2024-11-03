import { Console } from '@woowacourse/mission-utils';

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
    if (lotto.includes(this.bonusNumber)) {
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
    Console.print(`당첨통계\n---\n`);
    Console.print(`3개 일치 (5,000원) - ${this.#result.three}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#result.four}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#result.five}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#result.fiveBonus}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#result.six}개`);
    Console.print(`총 수익률은 ${this.#ROI * 100}%입니다.`);
  }
}

export default LottoCalculator;
