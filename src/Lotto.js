class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNumberCount(numbers);
    this.#validateSameNumber(numbers);
    this.#validateNumberSize(numbers);
    this.#numbers = numbers;
  }

  #validateNumberCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  #validateSameNumber(numbers) {
    const setNumbers = new Set(numbers);
    if (numbers.length !== setNumbers.size) {
      throw new Error(
        '[ERROR] 로또 번호는 중복되지 않은 숫자로 이루어져야 합니다.'
      );
    }
  }

  #validateNumberSize(numbers) {
    numbers.forEach((number) => {
      if (Number.isInteger(number) && number >= 1 && number <= 45) {
        throw new Error(
          '[ERROR] 로또 번호는 1이상 45이하의 정수로 이루어져야 합니다.'
        );
      }
    });
  }
}

export default Lotto;
