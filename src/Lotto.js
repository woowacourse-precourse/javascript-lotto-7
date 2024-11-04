class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if(!isNaN(numbers)) {
      throw new Error("[ERROR] 잘못된 값 입니다.")
    }
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 당첨 번호는 중복될 수 없습니다.");
    }
    if (!numbers.every(num => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이에 숫자여야 합니다.")
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
