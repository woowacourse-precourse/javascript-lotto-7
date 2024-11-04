import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length > 6) {
      throw new Error('[ERROR] 로또 번호가 6자리보다 많이 생성됨!');
    }
    if (numbers.length < 6) {
      throw new Error('[ERROR] 로또 번호가 6자리보다 적게 생성됨!');
    }
    // 위 과정에서 정상인 numbers가 set을 통해 수가 줄어들 경우 중복된 번호 판단
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복된 값이 있음!');
    }
  }

  printNumbers() {
    MissionUtils.Console.print(`[${this.#numbers.join(", ")}]`);
  }

  #countMatchingNumbers(correctNumbers) {
    return this.#numbers.filter(num => correctNumbers.includes(num)).length;
  }

  lottoResult(correctNumbers, bonusNumber) {
    const MATCHED_COUNT = this.#countMatchingNumbers(correctNumbers);

    const HAS_BONUS = this.#numbers.includes(parseInt(bonusNumber));

    if (MATCHED_COUNT === 6) return 1;
    if (MATCHED_COUNT === 5 && HAS_BONUS) return 2;
    if (MATCHED_COUNT === 5) return 3;
    if (MATCHED_COUNT === 4) return 4;
    if (MATCHED_COUNT === 3) return 5;
    return 0;
  }
}

export default Lotto;
