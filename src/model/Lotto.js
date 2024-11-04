class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개의 숫자로 입력해야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 당첨 번호는 중복된 숫자가 없도록 입력해야 합니다.");
    }
    if (numbers.some(num => num < 1 || num > 45)) {
      throw new Error("[ERROR] 1 이상 45 이하의 숫자여야 합니다.");
    }
  }
  
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
