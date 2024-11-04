import { LOTTO_VALUES } from '../constants/values';
import { WINNING_AMOUNTS } from '../constants/values';

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
    if (matchCount === LOTTO_VALUES.LOTTO_COUNT) {
      matchTable[0] += 1;
      return WINNING_AMOUNTS.FIRST;
    }
    if (
      matchCount === LOTTO_VALUES.LOTTO_COUNT - 1 &&
      lottoNumbers.includes(bonusNumber)
    ) {
      matchTable[1] += 1;
      return WINNING_AMOUNTS.SECOND;
    }
    if (matchCount === LOTTO_VALUES.LOTTO_COUNT - 1) {
      matchTable[2] += 1;
      return WINNING_AMOUNTS.THIRD;
    }
    if (matchCount === LOTTO_VALUES.LOTTO_COUNT - 2) {
      matchTable[3] += 1;
      return WINNING_AMOUNTS.FORTH;
    }
    if (matchCount === LOTTO_VALUES.LOTTO_COUNT - 3) {
      matchTable[4] += 1;
      return WINNING_AMOUNTS.FIFTH;
    }
    return 0;
  }
}

export default ResultCalculator;
