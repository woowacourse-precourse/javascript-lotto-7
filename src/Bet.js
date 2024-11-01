import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_BLANK, ERROR_MULTI_OF_1000, ERROR_NOT_A_NUMBER, throwError } from "./constants/errorConstants";
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
    if (money === "") throwError(ERROR_BLANK);
  }

  #validateNumber(money) {
    if (isNaN(money)) throwError(ERROR_NOT_A_NUMBER);
  }

  #validateUnit(money) {
    if (money % 1000 !== 0) throwError(ERROR_MULTI_OF_1000);
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
