import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";
class Bet {
  #money;
  count;
  betLists;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
    this.count = money / 1000;
    this.getBetLists();
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

  getBetLists() {
    Console.print(`${this.count}개를 구매했습니다.`);
    return this.#pickRandomNumberLists();
  }

  #pickRandomNumberLists() {
    const betlists = [];
    for (let index = 0; index < this.count; index += 1) {
      const betlist = this.#pickSortedRandomNumberList();
      this.#printBetList(betlist);
      betlists.push(betlist);
    }
    this.betLists = betlists;
  }

  #pickSortedRandomNumberList() {
    return this.#sortASC(this.#picUniqueNumber1To45Each6());
  }

  #picUniqueNumber1To45Each6() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }

  #sortASC(arr) {
    return arr.sort(function (a, b) {
      return a - b;
    });
  }

  #printBetList(betlist) {
    Console.print(`[${betlist.join(", ")}]`);
  }
}

export default Bet;
