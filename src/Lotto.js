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
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
    // 범위 검증 추가
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1과 45 사이의 숫자여야 합니다.");
      }
    });
  }

  get numbers() {
    return this.#numbers;
  }

  static createLotto(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;
    const lottoArr = [];

    for (let i = 0; i < lottoCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);
      lottoArr.push(new Lotto(numbers)); // 각 티켓에 대해 Lotto 객체 생성
    }

    return {
      lottoCount,
      lottoArr,
    };
  }
}

export default Lotto;
