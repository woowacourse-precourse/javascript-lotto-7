class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    if (numbers.length !== new Set(numbers).size) throw new Error('[ERROR] 중복되는 숫자가 있습니다.');
    numbers.forEach((num) => {
      if (isNaN(num)) throw new Error('[ERROR] 숫자가 아닌 값이 있습니다.');
      if (num < 1 || num > 45) throw new Error('[ERROR] 모든 숫자는 1과 45 사이여야 합니다.');
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
