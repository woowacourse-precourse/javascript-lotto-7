class Lotto {
  // 로또 하나를 저장하는 6개의 숫자 배열
  #numbers; // [1, 2, 3, 4, 5, 6]

  constructor(numbers) {
    this.#validate(numbers); // 내부 유효성 검사
    this.#numbers = numbers.sort((a, b) => a - b); // 이상 없으면 저장
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
