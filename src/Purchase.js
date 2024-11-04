
import { MissionUtils } from "@woowacourse/mission-utils";

class Purchase {
  #money;
  #tickets;
  
  //구입 금액을 받아 유효성을 계산하고,로또 티켓 개수를 계산
  constructor(money) {
    this.#validateMoney(money);
    this.#money = money;
    this.#tickets = money / 1000;
  }

  //구입 금액의 유효성을 검증
  #validateMoney(money) {
    if (!Number.isInteger(money) || money < 1000 || money % 1000 !== 0) {
        throw new Error("[ERROR] 구입 금액은 1,000원 단위의 양의 정수여야 합니다.");
      }
  }

  getTickets() {
    return this.#tickets;
  }

  getMoney() {
    return this.#money;
  }
  //구입한 로또 티켓 개수를 출력
  printTickets() {
    MissionUtils.Console.print(`\n${this.#tickets}개를 구매했습니다.`);
  }
}

export default Purchase;
