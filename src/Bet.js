import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";
class Bet {
  #money;
  count;

  constructor(money) {
    money = this.#replaceSpace(); 
    this.#validate(money);
    this.#money = money;
    this.count = money / 1000;
  }

  #replaceSpace(money){
    return money.replaceAll(" ","");
  }
  #validate(money) {
    Validator.validateBlank(money);
    Validator.validateNumber(money);
    Validator.validateUnit(money);
  }

  // TODO: 추가 기능 구현
  getMoney() {
    return this.#money;
  }

  getBetResults() {
    Console.print(`${this.count}개를 구매했습니다.`);
    return this.pickRandomNumberList();
  }

  pickRandomNumberList() {
    const betResults = [];
    for (let index = 0; index < this.count; index += 1) {
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