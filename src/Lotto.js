class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size < 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.");
    }
    numbers.forEach((number) => {
      if (isNaN(number) || number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  }

  // TODO: 추가 기능 구현
  getLotto() {
    return this.#numbers;
  }

  getRank(winningNumbers, bonusNumber) {
    const isMatchedBonus = this.#numbers.includes(bonusNumber);
    const count = winningNumbers.filter((n) =>
      this.#numbers.includes(n),
    )?.length;

    if (count === 6) {
      return 1;
    }
    if (count === 5) {
      return isMatchedBonus ? 2 : 3;
    }
    if (count === 4) {
      return 4;
    }
    if (count === 3) {
      return 5;
    }
    return 0;
  }
}

export default Lotto;
