class ResultCalculator {
  static calculateResults(lottoList, winningNumbers, bonusNumber) {
    let money = 0;
    let matchTable = new Array(5).fill(0);

    lottoList.forEach((lotto) => {
      const matchCount = this.getMatchCount(lotto.getNumbers(), winningNumbers);
      money += this.calculatePrize(
        matchCount,
        lotto.getNumbers(),
        bonusNumber,
        matchTable,
      );
    });

    return { money, matchTable };
  }

  static getMatchCount(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  static calculatePrize(matchCount, lottoNumbers, bonusNumber, matchTable) {
    if (matchCount === 6) {
      matchTable[0] += 1;
      return 2000000000;
    }
    if (matchCount === 5 && lottoNumbers.includes(bonusNumber)) {
      matchTable[1] += 1;
      return 30000000;
    }
    if (matchCount === 5) {
      matchTable[2] += 1;
      return 1500000;
    }
    if (matchCount === 4) {
      matchTable[3] += 1;
      return 50000;
    }
    if (matchCount === 3) {
      matchTable[4] += 1;
      return 5000;
    }
    return 0;
  }
}

export default ResultCalculator;
