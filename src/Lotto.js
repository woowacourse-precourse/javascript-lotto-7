class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getRank(WINNING_NUMBER, BONUS_NUMBER) {
    const MATCHED_COUNT = this.#getMatchedCount(WINNING_NUMBER);
    const IS_BONUS_MATCHED = this.#isBonusMatched(BONUS_NUMBER);

    switch (MATCHED_COUNT) {
      case 6:
        return 1;
      case 5:
        return IS_BONUS_MATCHED ? 2 : 3;
      case 4:
        return 4;
      case 3:
        return 5;
      default:
        return 0;
    }
  }

  #getMatchedCount(WINNING_NUMBER) {
    return this.#numbers.filter((number) => WINNING_NUMBER.includes(number))
      .length;
  }

  #isBonusMatched(BONUS_NUMBER) {
    return this.#numbers.includes(BONUS_NUMBER);
  }
}

export default Lotto;
