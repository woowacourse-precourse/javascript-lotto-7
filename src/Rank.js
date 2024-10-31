import { RANK, WINNING_COUNT } from './constants/magicNumber.js';

class Rank {
  #rank;

  constructor(winningNumbers, bonusNumber, userNumbers) {
    const { matchNumbers, matchBonusNumber } = this.#matchWinning(
      winningNumbers,
      bonusNumber,
      userNumbers,
    );
    this.#generateRank(matchNumbers, matchBonusNumber);
  }

  #matchWinning(winningNumbers, bonusNumber, userNumbers) {
    const matchNumbers = winningNumbers.filter((number) =>
      userNumbers.includes(number),
    );
    const matchBonusNumber = userNumbers.includes(bonusNumber);

    return { matchNumbers, matchBonusNumber };
  }

  #generateRank(matchNumbers, matchBonusNumber) {
    this.#checkFirstRank(matchNumbers.length);
    this.#checkSecondThridRank(matchNumbers.length, matchBonusNumber);
    this.#checkRestRank(matchNumbers.length);
  }

  #checkFirstRank(length) {
    if (length === WINNING_COUNT.FIRST_RANK) {
      this.#rank = RANK.FIRST_RANK;
    }
  }

  #checkSecondThridRank(length, matchBonusNumber) {
    if (length === WINNING_COUNT.SECOND_THIRD_RANK) {
      if (matchBonusNumber) {
        this.#rank = RANK.SECOND_RANK;
        return;
      }

      this.#rank = RANK.THIRD_RANK;
    }
  }

  #checkRestRank(length) {
    if (length === WINNING_COUNT.FOURTH_RANK) {
      this.#rank = RANK.FOURTH_RANK;
    }

    if (length === WINNING_COUNT.FIFTH_RANK) {
      this.#rank = RANK.FIFTH_RANK;
    }

    if (length < WINNING_COUNT.FIFTH_RANK) {
      this.#rank = RANK.SIXTH_RANK;
    }
  }

  getRank() {
    return this.#rank;
  }
}

export default Rank;
