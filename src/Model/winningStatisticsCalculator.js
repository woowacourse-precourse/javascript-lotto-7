export const matchCount = {
  threeMatch: 0,
  fourMatch: 0,
  fiveMatch: 0,
  fiveAndBonusMatch: 0,
  sixMatch: 0,
};

export class WinningStatistics {
  constructor() {
    this.winningNumbers = null;
    this.bonusNumber = null;
    this.lottoList = null;

    this.THREE_MATCH = 3;
    this.SIX_MATCH = 6;
    this.FIVE_AND_BONUS_MATCH = 6;

    this.winningNumberPlusBonusNumber = null;
  }

  calculateWinningStatistics = (winningNumbers, bonusNumber, lottoList) => {
    this.winningNumbers = winningNumbers.split(',').map(Number);
    this.bonusNumber = bonusNumber;
    this.lottoList = lottoList;
    this.countLottoWinningNumbersMatch();
  };

  countLottoWinningNumbersMatch = () => {
    this.countOneToSixMatch();
    this.countFiveAndBonusMatch();
  };

  countOneToSixMatch() {
    this.lottoList.forEach((element) => {
      const matchFilter = element.filter((it) => this.winningNumbers.includes(it)).length;
      for (let i = this.THREE_MATCH; i <= this.SIX_MATCH; i += 1) {
        const firstArr = i - 3;
        if (matchFilter === i) {
          matchCount[Object.keys(matchCount)[firstArr]] += 1;
        }
      }
    });
  }

  countFiveAndBonusMatch() {
    this.lottoList.forEach((element) => {
      if (
        element.filter((it) => this.getWinningNumPlusBonusNum().includes(it)).length ===
        this.FIVE_AND_BONUS_MATCH
      ) {
        matchCount[Object.keys(matchCount)[3]] += 1;
      }
    });
  }

  getWinningNumPlusBonusNum = () => {
    this.winningNumberPlusBonusNumber = this.winningNumbers;
    this.winningNumberPlusBonusNumber.push(Number(this.bonusNumber));
    return this.winningNumberPlusBonusNumber;
  };
}
