import { printParam } from "../handler/printHandlers.js";

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
  getLotteryMatches(lottery) {
    return this.#numbers.filter(num => lottery.includes(num));
  }

  printNumOfLotto() {
    return printParam(this.#numbers);
  }
}

export default Lotto;
