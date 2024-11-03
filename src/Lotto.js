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
    return this.#numbers.sort((a, b) => a - b);
  }

  getRank(WINNING_NUMBER, BONUS_NUMBER) {
    const MATCHED_COUNT = this.#getMatchedCount(WINNING_NUMBER);
    const IS_BONUS_MATCHED = this.#isBonusMatched(BONUS_NUMBER);

    if (MATCHED_COUNT === 6) return 1;
    if (MATCHED_COUNT === 5 && IS_BONUS_MATCHED) return 2;
    if (MATCHED_COUNT === 5) return 3;
    if (MATCHED_COUNT === 4) return 4;
    if (MATCHED_COUNT === 3) return 5;
    return 6;
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
