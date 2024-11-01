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

  get numbers() {
    return this.#numbers;
  }

  static createLotto(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000; // 1,000원 단위로 티켓 수 계산
    const lottoArr = [];

    for (let i = 0; i < lottoCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);
      lottoArr.push(new Lotto(numbers)); // 각 티켓에 대해 Lotto 객체 생성
    }

    return lottoArr;
  }
}

export default Lotto;
