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

    // TODO: 로또 숫자 validate 숫자 범위
    // 숫자 중복 검사

  }

  // TODO: 추가 기능 구현
}

export default Lotto;