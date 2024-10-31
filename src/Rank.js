const WINNING_COUNT = Object.freeze({
  FIRST_RANK: 6,
  SECOND_THIRD_RANK: 5,
  FOURTH_RANK: 4,
  FIFTH_RANK: 3,
});

const RANK = Object.freeze({
  FIRST_RANK: 1,
  SECOND_RANK: 2,
  THIRD_RANK: 3,
  FOURTH_RANK: 4,
  FIFTH_RANK: 5,
  SIXTH_RANK: 6,
});

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
