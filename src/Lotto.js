class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error("[ERROR] 로또 번호는 배열이어야 합니다.");
    }
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const hasDuplicate = new Set(numbers).size !== numbers.length;
    if (hasDuplicate) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }

    numbers.forEach((number) => {
      if (!Number.isInteger(number)) {
        throw new Error("[ERROR] 로또 번호는 정수여야 합니다.");
      }
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1에서 45 사이여야 합니다.");
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
