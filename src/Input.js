import { MissionUtils } from "@woowacourse/mission-utils";

class UserInput {
    async getUserPaidMoney() {
        const paidMoney = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요\n");
        MissionUtils.Console.print(paidMoney);
        return paidMoney;
      }

}

const test = new UserInput();
test.getUserInput()