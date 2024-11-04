// Lotto.js
import * as MissionUtils from "@woowacourse/mission-utils";
import { validatePickedNumbers } from "../src/error.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error("[ERROR] 로또 번호는 배열이어야 합니다.");
    }
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    validatePickedNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

function generateLottos(count) {
return Array.from({ length: count }, () => {
  const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  return new Lotto(numbers);
});
}


export default Lotto;
export { generateLottos };
