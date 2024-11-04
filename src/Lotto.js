class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);  // 번호를 오름차순으로 정렬
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
    if (!numbers.every(num => this.#isValidLottoNumber(num))) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  #isValidLottoNumber(num) {
    return Number.isInteger(num) && num >= 1 && num <= 45;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;