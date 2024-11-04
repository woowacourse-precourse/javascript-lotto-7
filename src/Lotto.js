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

    const checkInt = numbers.every((num) => Number.isInteger(num));
    if (!checkInt) {
      throw new Error("[ERROR] 로또 번호는 정수여야 합니다.");
    }
    const checkRange = numbers.every((num) => num >= 1 && num <= 45);
    if (!checkRange) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 자연수여야 합니다.");
    }
    const checkDuplicate = new Set(numbers).size !== numbers.length;
    if (checkDuplicate) {
      throw new Error("[ERROR] 로또 번호에 중복이 있습니다.");
    }
  }

  // TODO: 추가 기능 구현
  getLottoNumber() {
    return this.#numbers;
  }
}

export default Lotto;
