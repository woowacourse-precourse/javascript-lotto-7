import { MissionUtils } from "@woowacourse/mission-utils";

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
    const uniqueNum = new Set(numbers);
    if (uniqueNum.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    for (const number of numbers) {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1과 45 사이여야 합니다.")
      }
    }
  }

  getNum() {
    return this.#numbers;
  }

  // 주어진 번호와 중복되지 않는 보너스 번호를 생성
  static genBonusNum(existingNum) {
    let bonus;
    do {
      bonus = MissionUtils.Random.pickNumberInRange(1, 45);
    } while (existingNum.includes(bonus));
    return bonus;
  }
}

export default Lotto;
