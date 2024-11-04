import { MissionUtils } from "@woowacourse/mission-utils";

class InputView {
  async getPurchaseAmount() {
    return MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }

  async getWinningNumbers() {
    return MissionUtils.Console.readLineAsync("당첨 번호를 입력해주세요.\n");
  }

  async getBonusNumber() {
    return MissionUtils.Console.readLineAsync("보너스 번호를 입력해주세요.\n");
  }
}

export default InputView;
