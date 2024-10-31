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
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    if (
      numbers.some(
        (num) => isNaN(Number(num)) || !Number.isInteger(Number(num))
      )
    ) {
      throw new Error("[ERROR] 숫자 이외의 문자는 입력할 수 없습니다.");
    }
  }

  getLottoResult(winningNumbers, bonusNumber) {
    const winningNumbersArray = [...winningNumbers.split(","), bonusNumber];

    const matchedCount = this.#numbers.filter((number) =>
      winningNumbersArray.includes(number.toString())
    ).length;

    if (matchedCount === 3) {
      return 5;
    }

    if (matchedCount === 4) {
      return 4;
    }

    if (matchedCount === 5) {
      return 3;
    }

    if (matchedCount === 6) {
      if (this.#numbers.includes(Number(bonusNumber))) {
        return 2;
      }

      return 1;
    }

    return 0;
  }
}

export default Lotto;
