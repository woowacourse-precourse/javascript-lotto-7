import { ERROR_MESSAGES } from "./constants.js";
import { isValidLotteryNumInput } from "./handler/inputHandlers.js";
import { printError, printParam } from "./handler/printHandlers.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const ARR_RANGE = 6;
    if (numbers.length !== ARR_RANGE) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== ARR_RANGE) {
      return printError(ERROR_MESSAGES.LOTTERY_NUM_DUPLICATE);
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
