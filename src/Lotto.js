import { MissionUtils } from "@woowacourse/mission-utils"

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers];
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateOnlyUnique(numbers);
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateOnlyUnique(numbers) {
    if (!this.#isOnlyUnique(numbers)) {
      throw new Error("[ERROR] 중복된 숫자가 존재하지 않아야 합니다.");
    }
  }

  #lottoSort(numbers) {
    numbers.sort((a, b) => a - b);
  }

  #isOnlyUnique(numbers) {
    const stack = [];

    for (let i = 0; i < numbers.length; i++) {
      if (stack.includes(numbers[i])) {
        return false;
      }
      stack.push(numbers[i]);
    }

    return true;
  }

  #printLotto(numbers) {
    MissionUtils.Console.print(numbers);
  }

  #getBonusNum() {
    const BONUS_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 1);
    return BONUS_NUMBER;
  }

  #addBonusNum(numbers) {
    numbers.push(this.#getBonusNum());
  }

  #makeFullLotto(numbers) {
    this.#addBonusNum(numbers);
    this.#lottoSort(numbers);
  }

}

export default Lotto;
