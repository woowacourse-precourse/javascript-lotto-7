import Constants from "./Constants.js";
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(Constants.ERROR_MESSAGES.LOTTO_NUMBER_COUNT_ERROR);
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(Constants.ERROR_MESSAGES.DUPLICATE_NUMBER_ERROR);
    }
  }

  #getMatchingCount(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  calculateRank(winningNumbers, bonusNumber) {
    const matchingCount = this.#getMatchingCount(winningNumbers);
    const isBonusMatch = this.#numbers.includes(bonusNumber);

    for (let rank in Constants.RANKINGS) {
      const { matches, BonusMatch } = Constants.RANKINGS[rank];
      if (
        matchingCount === matches &&
        (BonusMatch === undefined || BonusMatch === isBonusMatch)
      ) {
        return parseInt(rank);
      }
    }
    return 0;
  }
}

export default Lotto;
