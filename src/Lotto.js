class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.sortNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const numberSet = new Set(numbers);
    if (numbers.length !== numberSet.size) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  getLottoNumbers() {
    return this.#numbers;
  }

  sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
