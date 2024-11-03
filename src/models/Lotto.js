import { generateError } from "../utils/generateError.js";
import Validator from "../validators/Validator.js";

class Lotto {
  // 로또 하나를 저장하는 6개의 숫자 배열
  #numbers; // [1, 2, 3, 4, 5, 6]

  constructor(numbers) {
    this.#validateNumberCount(numbers);
    this.#validateUniqueNumber(numbers);
    this.#validateContainNotNumber(numbers);
    this.#numbers = numbers.sort((a, b) => a - b); // 이상 없으면 저장
  }

  #validateNumberCount(numbers) {
    if (numbers.length !== 6) {
      generateError("현재 발행된 로또는 6개가 아닙니다. 각 로또는 6개의 수로 구성되어야 합니다.");
    }
  }

  #validateUniqueNumber(numbers) {
    const set = new Set(numbers);

    if (numbers.length !== set.size) {
      generateError("발행된 로또에 중복된 수가 포함되어 있습니다.");
    }
  }

  #validateContainNotNumber(numbers) {
    if (Validator.containNotNumber(numbers)) {
      generateError("발행된 로또에 숫자가 아닌 요소가 포함되어 있습니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
