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
    isDuplicateNumber(numbers);
    for (let number of numbers) {
      checkNumberRange(number);
      isNumber(number);
    }
  }
  getnumbers() {
    return this.numbers;
  }
  getmatchingCount(winningNumber) {
    const matchCount = numbers.filter((o) =>
      winningNumber.some((num) => num === o)
    ).length;
    return matchCount;
  }

  isMatchBonus(bonusNumber) {
    return numbers.includes(bonusNumber);
  }
}
export default { Lotto };
