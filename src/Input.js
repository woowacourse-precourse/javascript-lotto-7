import { MissionUtils } from "@woowacourse/mission-utils";

class UserInput {
    async #getUserInput() {
        const paidMoney = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요\n");
        MissionUtils.Console.print(paidMoney);
        return paidMoney;
      }
    
      async requestUserInput() {
        return await this.#getUserInput();
      }
}

const test = new UserInput();
test.requestUserInput()