import { MissionUtils } from "@woowacourse/mission-utils";
const LOTTO_NUMBER_MIN = 1;
const LOTTO_NUMBER_MAX = 45;
const LOTTO_NUMBER_COUNT = 6;

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

  getNumbers() {
    return this.#numbers;
  }

  static generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_MIN,
      LOTTO_NUMBER_MAX,
      LOTTO_NUMBER_COUNT
    ).sort((a, b) => a - b);
  }
}

export default Lotto;
