class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateCount(numbers);
    this.#validateDuplicates(numbers);
    this.#isNotNumberPrize(numbers);
    this.#isNotNumber(numbers);
  }

  #validateCount(numbers) {
    if (numbers.length !== 6) {
      throw "[ERROR] 로또 번호는 6개여야 합니다.";
    }
  }

  #validateDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw "[ERROR] 로또 번호는 중복될 수 없습니다.";
    }
  }

  // TODO: 추가 기능 구현
  #isNotNumber(numbers) {
    numbers.forEach((num) => {
      if (typeof num !== "number" || isNaN(num)) {
        throw "[ERROR] 입력값은 숫자여야 합니다.";
      }
    });
  }

  #isNotNumberPrize(numbers) {
    const notPrizeNumber = numbers.filter(
      (e) => typeof e !== "number" || isNaN(e)
    );
    if (notPrizeNumber.length > 0) {
      throw "[ERROR] 당첨 번호는 모두 숫자여야 합니다.";
    }
  }
}

export default Lotto;
