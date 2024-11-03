class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const numSet = new Set(numbers);
    if (numSet.size !== numbers.length) {
      throw new Error("[ERROR] 중복된 번호는 허용되지 않습니다.");
    }

    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error("[ERROR] 번호는 1~45 사이로만 입력해주세요.");
    }
  }
  getNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
