import { MissionUtils } from "@woowacourse/mission-utils";

class UserInput {
    async getUserPaidMoney() {
        const paidMoney = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요\n");
        return paidMoney;
    }

    async getWinningNumber() {
      const winningNumber = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
      return winningNumber;
    }

    async getBonusNumber() {
      const bonusNumber = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
      return bonusNumber;
    }

}

export default UserInput;
const test = new UserInput();
