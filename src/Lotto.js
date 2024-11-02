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

  // TODO: 추가 기능 구현
  validateIsRangeNumber(numbers) {
    numbers.forEach((num) => {
      if (!(num >= 1 && num <= 45)) {
        throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.');
      }
    });
  }

  validateLottoCount(numbers) {
    if (numbers.length - 1 !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  validateDuplicate(numbers) {
    const availableNumbers = new Array(46).fill(0);
    numbers.forEach((num) => {
      if (availableNumbers[num] > 0)
        throw new Error('[ERROR] 중복되지 않은 숫자를 입력해주세요.');
      availableNumbers[num]++;
    });
  }
}

export default Lotto;
