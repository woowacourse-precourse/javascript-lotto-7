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

  // TODO: 추가 기능 구현
  static checkMoney(input) {
    const NUM = Number(input);
    // console.log(NUM)
    if (isNaN(NUM)) {
      throw new Error("[Error] 입력이 숫자가 아닙니다.")
    }
    if ((NUM < 0)) {
      throw new Error("[Error] 입력이 양수가 아닙니다.")
    }
    if ((NUM % 1000)) {
      throw new Error("[Error] 입력이 1000의 배수가 아닙니다.")
    }
    return NUM
  }

  static buyTickets(num) {
    const NUM = num / 1000;
    MissionUtils.Console.print(NUM + "개를 구매했습니다.")
    const TICKETS = [];

    for (let i = 0; i < NUM; i++) {
      const LOTTO = new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
      MissionUtils.Console.print(LOTTO.#numbers);
      TICKETS.push(LOTTO);
    }
    return TICKETS
  }


  getters() {
    return this.#numbers;
  }
}

export default Lotto;