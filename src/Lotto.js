import LOTTO_RULE from './constant/lotto.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getWinningResult(winningNumbers, bonusNumber) {
    const matchCount = this.#numbers.filter((number) =>
      winningNumbers.includes(number),
    ).length;
    const isBonusMatch = this.#numbers.includes(bonusNumber);
    const rank = this.#getRank(matchCount, isBonusMatch);
    const reward = this.#getReward(rank);

    return { rank, reward };
  }

  #getRank(matchCount, isBonusMatch) {
    switch (matchCount) {
      case LOTTO_RULE.MATCH_COUNT.FIRST:
        return LOTTO_RULE.RANK.FIRST;
      case LOTTO_RULE.MATCH_COUNT.SECOND_OR_THIRD:
        return this.#getSecondOrThird(isBonusMatch);
      case LOTTO_RULE.MATCH_COUNT.FOURTH:
        return LOTTO_RULE.RANK.FOURTH;
      case LOTTO_RULE.MATCH_COUNT.FIFTH:
        return LOTTO_RULE.RANK.FIFTH;
      default:
        return LOTTO_RULE.RANK.NONE;
    }
  }

  #getSecondOrThird(isBonusMatch) {
    if (isBonusMatch) {
      return LOTTO_RULE.RANK.SECOND;
    }
    return LOTTO_RULE.RANK.THIRD;
  }

  #getReward(rank) {
    switch (rank) {
      case LOTTO_RULE.RANK.FIRST:
        return LOTTO_RULE.REWARD.FIRST;
      case LOTTO_RULE.RANK.SECOND:
        return LOTTO_RULE.REWARD.SECOND;
      case LOTTO_RULE.RANK.THIRD:
        return LOTTO_RULE.REWARD.THIRD;
      case LOTTO_RULE.RANK.FOURTH:
        return LOTTO_RULE.REWARD.FOURTH;
      case LOTTO_RULE.RANK.FIFTH:
        return LOTTO_RULE.REWARD.FIFTH;
      default:
        return LOTTO_RULE.REWARD.NONE;
    }
  }
}

export default Lotto;
