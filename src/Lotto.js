class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b); // 오름차순 정렬
  }

  #validate(numbers) {
    if (numbers.length !== 6 || new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 6개여야 합니다.");
    }
    if (numbers.some(num => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
