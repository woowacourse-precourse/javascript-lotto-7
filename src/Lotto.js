class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.duplicate(numbers);
    this.sort(numbers);
    this.range(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  duplicate(numbers) {
    const checkDuplicate = new Set(numbers);
    if (checkDuplicate.size !== numbers.length) {
      throw new Error("[ERROR] 숫자는 중복되면 안 됩니다.");
    }
  }

  sort(numbers) {
    numbers.sort((a, b) => a - b);
  }

  range(numbers) {
    numbers.forEach(element => {
      if (element < 1 || element > 45) {throw new Error("[ERROR] 숫자는 1 이상 45 이하여야 합니다.");}
    });
  }
}

export default Lotto;
