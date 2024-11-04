class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.validateIsRangeNumber(numbers);
    this.validateLottoCount(numbers);
    this.validateDuplicate(numbers);
  }

  validateIsRangeNumber(numbers) {
    numbers.forEach((num) => {
      if (!(num >= 1 && num <= 45)) {
        throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.');
      }
    });
  }

  validateLottoCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  validateDuplicate(numbers) {
    const set = new Set();
    numbers.forEach((num) => {
      set.add(num);
    });
    if (set.size !== numbers.length)
      throw new Error('[ERROR] 중복되지 않은 숫자를 입력해주세요.');
  }
}

export default Lotto;
