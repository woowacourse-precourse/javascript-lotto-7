import Validate from './Validate.js';
class LottoAnalyzer {
  #winningLottoSet;
  #bonusNum;
  #buyLottos;
  #winningCount = Array(5).fill(0);
  #prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];
  #totalProfit = 0;
  #investMoney;
  #roi = 0;
  #loseIndex = -1;

  constructor(winningLotto, buyLottos, bonusNum, invest) {
    Validate.validateBonusNum(bonusNum, winningLotto);
    this.#winningLottoSet = new Set(winningLotto);
    this.#buyLottos = buyLottos;
    this.#bonusNum = bonusNum;
    this.#investMoney = invest;
  }

  calculate() {
    this.#countWinningLotto();
    this.#calculateTotalProfit();
    this.#calculateRoi();
  }

  getRoi() {
    return this.#roi;
  }

  getwinningCount() {
    return this.#winningCount;
  }

  #countWinningLotto() {
    this.#buyLottos.forEach((lotto) => {
      let matchBonusCount = 0;
      let matchBasicCount = 0;
      lotto.getNumbers().forEach((number) => {
        if (number === this.#bonusNum) matchBonusCount += 1;
        if (this.#winningLottoSet.has(number)) matchBasicCount += 1;
      });
      const index = this.#getIndex(matchBonusCount, matchBasicCount);
      if (index >= 0) this.#winningCount[index] += 1;
    });
  }

  #calculateTotalProfit() {
    for (let idx = 0; idx < 5; idx++) {
      this.#totalProfit += this.#winningCount[idx] * this.#prizeMoney[idx];
    }
  }

  #calculateRoi() {
    const rateOfReturn = (this.#totalProfit / this.#investMoney) * 100;
    this.#roi = Number(rateOfReturn.toFixed(2));
  }

  #getIndex(matchBonusCount, matchBasicCount) {
    if (matchBasicCount === 6) return 4;
    if (matchBasicCount === 5 && matchBonusCount === 1) return 3;
    if (matchBasicCount === 5) return 2;
    if (matchBasicCount === 4) return 1;
    if (matchBasicCount === 3) return 0;
    return this.#loseIndex;
  }
}

export default LottoAnalyzer;
