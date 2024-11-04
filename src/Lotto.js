class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.duplicates(numbers);
    this.lottonumrange(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  duplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }
  lottonumrange(numbers) {
    const numrange = numbers.some((num) => num < 1 || num > 45);
    if (numrange) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }
  getNumbers() {
    return [...this.#numbers];
  }

  match(winNumbers) {
    return this.#numbers.filter((number) => winNumbers.includes(number)).length;
  }

  hasBonus(bonusNum) {
    return this.#numbers.includes(bonusNum);
  }
}

export default Lotto;
