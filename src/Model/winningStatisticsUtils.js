export const matchCount = {
  threeMatch: 0,
  fourMatch: 0,
  fiveMatch: 0,
  fiveAndBonusMatch: 0,
  sixMatch: 0,
};

export class WinningStatistics {
  countLottoWinning = (winningNumbers, lottoList, getWinningNumPlusBonusNum) => {
    lottoList.forEach((element) => {
      const matchFilter = element.filter((it) => winningNumbers.includes(it)).length;
      for (let i = 3; i < 7; i += 1) {
        const arr = i - 3;
        if (matchFilter === i) {
          matchCount[Object.keys(matchCount)[arr]] += 1;
        }
      }

      if (element.filter((it) => getWinningNumPlusBonusNum.includes(it)).length === 5) {
        matchCount[Object.keys(matchCount)[3]] += 1;
      }
    });
  };

  getWinningNumPlusBonus = (winningNum, bonusNum) => {
    const getWinningNumPlusBonusNum = winningNum;
    getWinningNumPlusBonusNum.push(Number(bonusNum));
    return getWinningNumPlusBonusNum;
  };

  produceStatistics = (winningNum, bonusNumber, lottoList) => {
    const getWinningNumPlusBonusNum = this.getWinningNumPlusBonus(winningNum, bonusNumber);
    this.countLottoWinning(winningNum, lottoList, getWinningNumPlusBonusNum);
  };

  calculateWinningAmount = () => {
    const winningAmount =
      matchCount.threeMatch * 5000 +
      matchCount.fourMatch * 50000 +
      matchCount.fiveMatch * 1500000 +
      matchCount.fiveAndBonusMatch * 30000000 +
      matchCount.sixMatch * 2000000000;
    return winningAmount;
  };
}