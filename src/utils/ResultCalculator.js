import { LOTTO_VALUES } from '../constants/values.js';
import { WINNING_AMOUNTS } from '../constants/values.js';

class ResultCalculator {
  static calculateResults(lottoList, winningNumbers, bonusNumber) {
    let money = 0;
    let matchTable = this.initializeMatchTable();

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

  static initializeMatchTable() {
    return new Array(5).fill(0);
  }

  static getMatchCount(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  static calculatePrize(matchCount, lottoNumbers, bonusNumber, matchTable) {
    if (this.isFirstPrize(matchCount, matchTable)) return WINNING_AMOUNTS.FIRST;
    if (this.isSecondPrize(matchCount, lottoNumbers, bonusNumber, matchTable))
      return WINNING_AMOUNTS.SECOND;
    if (this.isThirdPrize(matchCount, matchTable)) return WINNING_AMOUNTS.THIRD;
    if (this.isForthPrize(matchCount, matchTable)) return WINNING_AMOUNTS.FORTH;
    if (this.isFifthPrize(matchCount, matchTable)) return WINNING_AMOUNTS.FIFTH;
    return 0;
  }

  static isFirstPrize(matchCount, matchTable) {
    if (matchCount === LOTTO_VALUES.LOTTO_COUNT) {
      matchTable[0] += 1;
      return true;
    }
  }

  static isSecondPrize(matchCount, lottoNumbers, bonusNumber, matchTable) {
    if (
      matchCount === LOTTO_VALUES.LOTTO_COUNT - 1 &&
      lottoNumbers.includes(bonusNumber)
    ) {
      matchTable[1] += 1;
      return true;
    }
  }

  static isThirdPrize(matchCount, matchTable) {
    if (matchCount === LOTTO_VALUES.LOTTO_COUNT - 1) {
      matchTable[2] += 1;
      return true;
    }
  }

  static isForthPrize(matchCount, matchTable) {
    if (matchCount === LOTTO_VALUES.LOTTO_COUNT - 2) {
      matchTable[3] += 1;
      return true;
    }
  }

  static isFifthPrize(matchCount, matchTable) {
    if (matchCount === LOTTO_VALUES.LOTTO_COUNT - 3) {
      matchTable[4] += 1;
      return true;
    }
  }
}

export default ResultCalculator;
