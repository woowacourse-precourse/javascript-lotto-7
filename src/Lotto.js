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
  }

  // TODO: 추가 기능 구현
  confirmMatches(winNum) {
    let matches = 0;
    this.#numbers.forEach((number) => {
      if (winNum.includes(number)) {
        matches += 1;
      }
      return matches;
    });
  }
  confirmBonus(bonusNum) {
    const match = this.#numbers.includes(bonusNum);
    return match;
  }
}

export default Lotto;
