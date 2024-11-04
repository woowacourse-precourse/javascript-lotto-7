class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b); // 정렬을 여기에 위치시킵니다.
  }

  #validate(numbers) {
    if (numbers.length !== 6 || new Set(numbers).size !== 6) {
      throw new Error(
        "[ERROR] 로또 번호는 중복되지 않는 6개의 숫자여야 합니다."
      );
    }
    if (!numbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers; // private field의 값 반환
  }
}

export default Lotto;
