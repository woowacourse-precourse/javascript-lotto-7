import { Console, MissionUtils } from "@woowacourse/mission-utils";
class Bet {
  #money;
  count;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
    this.count = money / 1000;
  }

  #validate(money) {
    this.#validateBlank(money);
    this.#validateNumber(money);
    this.#validateUnit(money);
  }

  #validateBlank(money) {
    if (money === "") throw new Error("[ERROR] 공백은 입력될 수 없습니다.");
  }

  #validateNumber(money) {
    if (isNaN(money)) throw new Error("[ERROR] 숫자를 입력해주세요.");
  }

  #validateUnit(money) {
    if (money % 1000 !== 0) throw new Error("[ERROR] 1000단위의 숫자를 입력해주세요.");
  }
  // TODO: 추가 기능 구현
  getMoney() {
    return this.#money;
  }

  getBetResults() {
    Console.print(`${this.count}개를 구매했습니다.`);
    const betResults = [];
    for (let index = 0; index < this.count; index++) {
      const betResult = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort(function (a, b) {
        return a - b;
      });
      Console.print(`[${betResult.join(", ")}]`);
      betResults.push(betResult);
    }
    return betResults;
  }
}

export default Bet;
