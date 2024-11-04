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

    const uniqueValues = new Set(numbers);
    const uniqueNumbers = [...uniqueValues];
    if (numbers.length !== uniqueNumbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자는 존재할 수 없습니다');
    }
  }

  showNumber() {
    return this.#numbers.sort((a, b) => a - b);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
