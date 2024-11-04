class LottoAnalyzer {
  #winningLottoSet;
  #bonusNum;
  #buyLottos;
  #winningCount = Array(5).fill(0);
  #matchBasicCount = 0;
  #matchBonusCount = 0;
  #prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];
  #totalProfit = 0;
  #investMoney;
  #roi = 0;

  constructor(winningLotto, buyLottos, bonusNum, invest) {
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
      lotto.getNumbers().forEach((number) => {
        if (number === this.#bonusNum) this.#matchBonusCount += 1;
        if (this.#winningLottoSet.has(number)) this.#matchBasicCount += 1;
      });
      const index = this.#getIndex();
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

  #getIndex() {
    if (this.#matchBasicCount === 6) return 4;
    if (this.#matchBasicCount === 5 && this.#matchBonusCount === 1) return 3;
    if (this.#matchBasicCount === 5) return 2;
    if (this.#matchBasicCount === 4) return 1;
    if (this.#matchBasicCount === 3) return 0;
    return -1;
  }
}

export default LottoAnalyzer;
