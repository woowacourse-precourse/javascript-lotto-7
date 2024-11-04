class Lotto {
  #numbers = [];

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const uniqueNumbers = new Set(numbers);

    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복이 있을 수 없습니다.");
    }

    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(
          "[ERROR] 로또 번호는 1 이상 45 이하의 숫자여야 합니다."
        );
      }
    });
  }

  get numbers() {
    return this.#numbers;
  }

  calculateRank(winningNumberList, bonusNumber) {
    const winningMatchCount = this.#numbers.filter((number) =>
      winningNumberList.includes(number)
    ).length;

    switch (winningMatchCount) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        return this.calculateBonusNumber(bonusNumber);
      case 6:
        return 1;
      default:
        return 0;
    }
  }

  calculateBonusNumber(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) {
      return 2;
    }

    return 3;
  }
}

export default Lotto;
