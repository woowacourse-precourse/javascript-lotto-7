class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  // 번호 유효성 검사
  #validate(numbers) {
    if (!this.#isValidLength(numbers)) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (!this.#isValidRange(numbers)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (this.#hasDuplicates(numbers)) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  // 번호 개수 확인
  #isValidLength(numbers) {
    return numbers.length === 6;
  }

  // 번호 범위 확인
  #isValidRange(numbers) {
    return numbers.every((number) => number >= 1 && number <= 45);
  }

  // 중복 확인
  #hasDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    return uniqueNumbers.size !== numbers.length;
  }

  // 번호 반환
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;