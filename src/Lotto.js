import { MissionUtils } from "@woowacourse/mission-utils"

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers];
  }

  #validate(numbers) {
    this.#validateIsChar(numbers);
    this.#validateLength(numbers);
    this.#validateOnlyUnique(numbers);
    this.#validateNumRange(numbers);
  }

  #validateIsChar(numbers) {
    numbers.forEach((val) => {
      if (isNaN(val) || typeof val !== 'number') {
        throw new Error("[ERROR] 로또 번호는 숫자로 입력해야 합니다.")
      }
    })
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

  #validateNumRange(numbers) {
    numbers.forEach((val) => {
      if (val < 1 || val > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    })
  }

  #isOnlyUnique(numbers) {
    return new Set(numbers).size === numbers.length;
  }

  #lottoSort(numbers) {
    numbers.sort((a, b) => a - b);
  }

  makeLotto() {
    this.#lottoSort(this.#numbers);
    this.#printLotto(this.#numbers);
  }

  makeWinningLotto() {
    this.#addBonusNum();
    this.#lottoSort(this.#numbers);
  }

  #getBonusNum() {
    const BONUS_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 1)[0];
    return BONUS_NUMBER;
  }

  #addBonusNum() {
    this.#numbers.push(this.#getBonusNum());
  }

  #printLotto() {
    MissionUtils.Console.print(this.#numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}


export default Lotto;
