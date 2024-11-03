import Validator from '../utils/validator.js';

class LottoResult {
  #lottos;
  #winningNumbers;
  #bonusNumber;
  #rankCounts;
  #prizeAmounts;
  #profitRate;
  #amount;

  constructor(lottos, winningNumbers, bonusNumber, amount) {
    this.#validateBonusNumber(bonusNumber, winningNumbers);

    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#amount = amount;
    this.#rankCounts = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
    this.#prizeAmounts = {
      3: 5000,
      4: 50000,
      5: 1500000,
      5.5: 30000000,
      6: 2000000000,
    };
    this.#profitRate = this.calculateProfitRate(this.#prizeAmounts);
  }

  #validateBonusNumber(bonusNumber, winningNumbers) {
    Validator.validateBonusNumber(bonusNumber, winningNumbers);
  }

  calculateResults() {
    this.#lottos.forEach((lotto) => {
      const matchCount = this.#getMatchCount(lotto.getNumber());
      const hasBonus = lotto.getNumber().includes(this.#bonusNumber);

      switch (matchCount) {
        case 6:
          this.#rankCounts[6]++;
          break;
        case 5:
          hasBonus ? this.#rankCounts[5.5]++ : this.#rankCounts[5]++;
          break;
        case 4:
          this.#rankCounts[4]++;
          break;
        case 3:
          this.#rankCounts[3]++;
          break;
        default:
          break;
      }
    });
  }

  #getMatchCount(lottoNumbers) {
    return lottoNumbers.filter((number) =>
      this.#winningNumbers.includes(number),
    ).length;
  }

  calculateProfitRate() {
    const totalPrize = Object.keys(this.#rankCounts).reduce((acc, rank) => {
      return acc + this.#rankCounts[rank] * this.#prizeAmounts[rank];
    }, 0);

    const profitRate =
      this.#amount === 0 ? 0 : ((totalPrize / this.#amount) * 100).toFixed(1);

    this.#profitRate = Number(profitRate);
    return this.#profitRate;
  }

  getRankCounts() {
    return this.#rankCounts;
  }

  getProfitRate() {
    return this.#profitRate;
  }
}

export default LottoResult;
