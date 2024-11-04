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
    // if (numbers)
  }

  // static funcLoop(callback) {
  //   while (true) {
  //     try {
  //       return callback()
  //     } catch (error) {
  //       throw new Error(error.message)
  //     }
  //   }
  // }

  static checkPurchase(callback) {
    const NUM = Number(callback);
    // const NUM = Number(num);
    if (NUM) {
      if (NUM % 1000) {
        throw new Error("[ERROR] 구입 금액은 1,000의 배수여야 합니다.");
      }
      return NUM
    }
    throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
  }

  static async loopCheckPurchase(num) {
    return funcLoop(() => this.checkPurchase(num))
  }

  static async buyLottos(num) {
    const TICKET = parseInt(num / 1000);
    const TICKETS = []
    MissionUtils.Console.print(TICKET + "개를 구매했습니다.");
    // MissionUtils.Console.print();
    for (let i = 0; i < TICKET; i++) {
      // const RANNUM = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      // MissionUtils.Console.print(RANNUM);
      const LOTTO = new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
      MissionUtils.Console.print(LOTTO.#numbers);
      // MissionUtils.Console.print(LOTTO.getters());
      TICKETS.push(LOTTO);
      // MissionUtils.Console.print(Lotto.genLotto());
    }
    return TICKETS;
  }

  static async loopBuyLottos(num) {
    return funcLoop(() => this.buyLottos(num))
  }

  static getWinNum() {
    // const
    // return 
  }

  getters() {
    return this.#numbers;
  }
  // genLotto() {
  //   return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  // }
  // TODO: 추가 기능 구현
}

async function funcLoop(callback) {
  while (true) {
    try {
      return await callback()
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default Lotto;
