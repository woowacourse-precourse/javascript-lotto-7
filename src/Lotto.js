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
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }

    numbers.forEach(num => {
      if (num < 1 || num > 45) {
          throw new Error("[ERROR] 로또 번호의 숫자 범위는 1이상 45이하여야 합니다.");
      }
    });

  }

  // 로또 번호 발행
  static generatedLottoNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort(function(a, b) {
      return a - b;
    });
    return new Lotto(numbers);
  }


  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;