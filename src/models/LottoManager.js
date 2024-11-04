import Lotto from './Lotto.js';

class LottoManager {
  #purchaseAmount;
  #purchaseNumber;
  #lottoList;
  #winningNumbers;
  #bonusNumber;
  #winningLottoCounts;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#purchaseNumber = this.#purchaseAmount / 1000;
    this.#lottoList = this.generateLottoList();
    this.#winningNumbers = [];
    this.#bonusNumber = null;
    this.#winningLottoCounts = [0, 0, 0, 0, 0];
  }

  get purchaseNumber() {
    return this.#purchaseNumber;
  }

  get lottoList() {
    return this.#lottoList;
  }

  // winningNumbers와 bonusNumber를 테스트에서 확인할 수 있도록 getter 추가
  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  getWinningLottoCounts() {
    return this.#winningLottoCounts;
  }

  setWinningNumbers(numbers, bonusNumber) {
    this.#winningNumbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  generateLottoList() {
    const lottoList = [];
    for (let i = 0; i < this.#purchaseNumber; i++) {
      const lotto = new Lotto();
      lottoList.push(lotto.getLotto());
    }
    return lottoList;
  }

  calculateWinningLottoCounts() {
    this.#winningLottoCounts = [0, 0, 0, 0, 0];

    this.#lottoList.forEach((lotto) => {
      const matches = this.#winningNumbers.filter((number) =>
        lotto.includes(number),
      ).length;
      const hasBonus = lotto.includes(this.#bonusNumber);

      if (matches === 3) this.#winningLottoCounts[0]++;
      if (matches === 4) this.#winningLottoCounts[1]++;
      if (matches === 5 && !hasBonus) this.#winningLottoCounts[2]++;
      if (matches === 5 && hasBonus) this.#winningLottoCounts[3]++;
      if (matches === 6) this.#winningLottoCounts[4]++;
    });

    return this.#winningLottoCounts;
  }

  calculateRateOfReturn() {
    let isWinningPrize = 0;
    isWinningPrize += this.#winningLottoCounts[0] * 5000;
    isWinningPrize += this.#winningLottoCounts[1] * 50000;
    isWinningPrize += this.#winningLottoCounts[2] * 1500000;
    isWinningPrize += this.#winningLottoCounts[3] * 30000000;
    isWinningPrize += this.#winningLottoCounts[4] * 2000000000;

    const rateOfReturn = (isWinningPrize / this.#purchaseAmount) * 100;
    return rateOfReturn.toFixed(1);
  }
}

export default LottoManager;
