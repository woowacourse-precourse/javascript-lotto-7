class Lotto { // 패키지를 변경할 수 있다.
  #numbers; // 이외의 필드(인스턴스 변수)를 추가할 수 없다. #은 변경할 수 없다.

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
