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

    // numbers.forEach(element => {
    //   if ((element < 1) || (45 < element)) {
    //     throw new Error("[ERROR] 로또 번호는 1과 45사이여야 합니다.");
    //   }
    // });
    const DUP = new Set([])
    numbers.forEach(element => {
      DUP.add(element)
      if (isNaN(element)) {
        throw new Error("[Error] 입력이 숫자가 아닙니다.")
      }
      if ((element < 1) || (45 < element)) {
        throw new Error("[ERROR] 로또 번호는 1과 45사이여야 합니다.");
      }
    });
    if (DUP.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }

    // const DUP = new Set([])
    // numbers.forEach(element => {
    //   DUP.add(element)
    // })
    // if (DUP.length !== 6) {
    //   throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    // }
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

  static setWinNum(input) {
    const NUMS = input.trim().split(",").map(Number).sort((a, b) => a - b);
    const WINNUMS = new Lotto(NUMS);
    return WINNUMS;
  }
  // let asdf = "1,2,3,4,5,6"
  // let abc = asdf.split(",").trim();

  static setBonusNum(input, WINNUMS) {
    const BONUSNUM = Number(input);
    if (isNaN(BONUSNUM)) {
      throw new Error("[Error] 입력이 숫자가 아닙니다.")
    }
    if ((BONUSNUM < 1) || (45 < BONUSNUM)) {
      throw new Error("[ERROR] 로또 번호는 1과 45사이여야 합니다.");
    }
    WINNUMS.forEach(element => {
      // MissionUtils.Console.print(element);
      if (BONUSNUM == element) {
        throw new Error("[ERROR] 보너스 번호가 로또 번호와 중복되었습니다.");
      }
    })
    return BONUSNUM
  }

  getters() {
    return this.#numbers;
  }
}

export default Lotto;