import { MissionUtils } from "@woowacourse/mission-utils";

class UserInput {
    async getUserPaidMoney() {
        const paidMoney = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요\n");
        MissionUtils.Console.print(paidMoney);
        return paidMoney;
    }

    async getWinningNumber() {
      const winningNumbers = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
      return winningNumbers;
    }

}

const test = new UserInput();
test.getUserInput()