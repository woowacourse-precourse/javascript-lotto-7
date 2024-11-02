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
  }

  static checkPurchase(num) {
    const NUM = Number(num);
    if (NUM) {
      if (NUM % 1000) {
        throw new Error("[ERROR] 구입 금액은 1,000의 배수여야 합니다.");
      }
      return NUM
    }
    throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
