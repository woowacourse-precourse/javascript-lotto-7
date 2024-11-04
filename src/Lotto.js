import { MissionUtils } from "@woowacourse/mission-utils";
import inputValidator from "./inputValidator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    inputValidator.checkLottoNumbers(numbers);
  }

  print() {
    MissionUtils.Console.print(`[${this.#numbers.join(", ")}]`);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
