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
    numbers.forEach(element => {
      // 로또 범위 내 숫자인지 검증
      Lotto.isValidNumber(element);
      
      // 중복된 숫자인지 검증
      if (numbers.indexOf(element) !== numbers.lastIndexOf(element)) {
        throw new Error("[ERROR] 로또 번호는 중복 입력할 수 없습니다.");
      }
    });
  }

  // TODO: 추가 기능 구현
  get numbers() {
    return this.#numbers;
  }

  static isValidNumber(number) {
    if (number < 1 || number > 45) throw Error("[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.");
  }
}

export default Lotto;
