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

    const isNumberRangeValid = numbers.every((number) => number >= 1 && number <= 45);

    if (!isNumberRangeValid) {
      throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이의 숫자들만 입력해야 합니다.');
    }

    const set = new Set(numbers);

    if (set.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않은 숫자로 입력해야 합니다.');
    }
  }
}

export default Lotto;
