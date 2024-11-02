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
    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error('[ERROR] 중복된 로또 번호는 존재할 수 없습니다.');
    }
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error('[ERROR] 로또 번호는 숫자 범위(1~45) 안에서 존재해야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
