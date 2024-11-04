class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6 || numbers.some(num => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 중복되지 않는 숫자여야 합니다.");
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }

  getMatchingCount(winningLotto) {
    return this.#numbers.filter(num => winningLotto.getNumbers().includes(num)).length;
  }

  contains(number) {
    return this.#numbers.includes(number);
  }
}

export default Lotto;
