import LOTTO_CONSTANTS from '../constants/lottoConstatns';

class WinningStatics {
  static PRIZE_MONEY = {
    3: 5000,
    4: 50000,
    5: 1500000,
    5.5: 30000000, // 당첨 번호 5개 + 보너스 번호 일치
    6: 2000000000,
  };
  static PERCENTAGE = 100;

  #winningNumbers;
  #bonusNumber;
  #rankStatics;
  #totalPrizeMoney;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#rankStatics = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    this.#totalPrizeMoney = 0;
  }

  countMatchingNumbers(lottoNumbers) {
    return lottoNumbers.filter((num) => this.#winningNumbers.includes(num)).length;
  }

  getRank(matchCount, hasBonusNumber) {
    const rankMap = {
      6: 1,
      5: hasBonusNumber ? 2 : 3,
      4: 4,
      3: 5,
    };

    return rankMap[matchCount];
  }

  getPrizeMoney(matchCount, hasBonusNumber) {
    if (matchCount === 5 && hasBonusNumber) {
      return WinningStatics.PRIZE_MONEY[5.5];
    }

    return WinningStatics.PRIZE_MONEY[matchCount] || 0;
  }

  updateRankStatics(matchCount, hasBonusNumber) {
    const rank = this.getRank(matchCount, hasBonusNumber);
    if (rank) {
      this.#rankStatics[rank] += 1;
      this.#totalPrizeMoney += this.getPrizeMoney(matchCount, hasBonusNumber);
    }
  }

  updateStatics(lottos) {
    lottos.forEach((lotto) => {
      const matchCount = this.countMatchingNumbers(lotto.numbers);
      this.updateRankStatics(matchCount, lotto.numbers.includes(this.#bonusNumber));
    });
  }

  getRankStatics() {
    return this.#rankStatics;
  }

  calculateRateOfReturn(lottoCount) {
    return (
      (this.#totalPrizeMoney / (lottoCount * LOTTO_CONSTANTS.LOTTO_PRICE)) *
      WinningStatics.PERCENTAGE
    );
  }
}

export default WinningStatics;
