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
  }

  getNumbers() {
    return this.#numbers;
  }

  // 추가 기능: 로또 번호 정렬
  sortNumbers() {
    return [...this.#numbers].sort((a, b) => a - b);
  }

  // 추가 기능: 번호가 포함되어 있는지 확인
  hasNumber(num) {
    return this.#numbers.includes(num);
  }
}
export default Lotto;
