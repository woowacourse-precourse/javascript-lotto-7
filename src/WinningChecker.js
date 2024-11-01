import { initRecord } from './utils/initRecord.js';

export class WinningChecker {
  #record;

  #winningNumbers;

  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
    this.#record = initRecord();
  }

  checkWinning = (lottoNumbers) => {
    lottoNumbers.forEach((lottoNumber) => {
      const matchingCount = this.getMatchingCount(lottoNumber);
      const isWinningBonus = this.checkWinningBonus(lottoNumber);

      this.#record = this.#record.map(
        this.updateTableCount(matchingCount, isWinningBonus),
      );
    });
    return this.#record;
  };

  updateTableCount = (matchingCount, isWinningBonus) => (table) => {
    const { condition } = table;
    if (condition.matchingCount !== matchingCount) {
      return table;
    }
    if (
      'isWinningBonus' in condition &&
      condition.isWinningBonus !== isWinningBonus
    ) {
      return table;
    }
    return { ...table, count: table.count + 1 };
  };

  getMatchingCount = (lottoNumber) => {
    const matchingNumbers = this.#winningNumbers.filter((winningNumber) =>
      lottoNumber.includes(winningNumber),
    );
    return matchingNumbers.length;
  };

  checkWinningBonus = (lottoNumber) => lottoNumber.includes(this.#bonusNumber);
}
