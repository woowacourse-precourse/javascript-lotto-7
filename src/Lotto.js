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

    if (numbers.length !== set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error("[ERROR] 로또 1과 45 사이의 범위여야 합니다.");
    }

    if (numbers.some((number) => number.isNaN())) {
      throw new Error("[ERROR] 로또 1과 45 사이의 범위여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
