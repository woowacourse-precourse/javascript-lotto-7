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
  }

  // TODO: 추가 기능 구현
  static checkMoney(input) {
    const NUM = Number(input);
    // console.log(NUM)
    if (isNaN(NUM)) {
      throw new Error("[Error] 입력이 숫자가 아닙니다.")
    }
    if ((NUM < 0)) {
      throw new Error("[Error] 입력이 양수가 아닙니다.")
    }
    if ((NUM % 1000)) {
      throw new Error("[Error] 입력이 1000의 배수가 아닙니다.")
    }
    return NUM
  }
}

export default Lotto;