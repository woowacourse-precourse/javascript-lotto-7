import { validateLottoNumbers } from "../utils/validation.js";
import { Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    if (!numbers) {
      this.#numbers = this.generateRandomNumbers();
    } else {
      validateLottoNumbers(numbers); // 유효성 검사 추가
      this.#numbers = numbers;
    }
  }

  // 로또 번호 6개를 랜덤으로 생성 (1 ~ 45 중 중복되지 않는 숫자)
  generateRandomNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
    return numbers;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
