import { DOMAIN_ERRORS } from "./constant/Error.js";
import { LOTTO_CONFIG } from "./constant/LottoConfig.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplicate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateDuplicate(numbers) {
    if (new Set(numbers).size !== LOTTO_CONFIG.COUNT) {
      throw new Error(DOMAIN_ERRORS.DUPLICATE_NUMBER);
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
