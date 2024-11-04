import validators from "./utils/Validators.js";
import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    validators.checkDuplicateNumber(numbers);
    validators.checkLottoLength(numbers);
    this.#numbers = numbers;
  }

  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
