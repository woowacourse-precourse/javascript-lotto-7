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
    const testNumbers = new Set(numbers);
    if (testNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 당첨 번호는 중복되지 않아야 합니다.");
    }
    if (numbers.some(num => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  get LottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
