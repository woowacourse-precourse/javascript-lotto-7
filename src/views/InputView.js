import { MissionUtils } from "@woowacourse/mission-utils";

const InputView = {
  async getLottoMoney() {
    const data = MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return data;
  },
  async getWinningNumbers() {
    const data = MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    return data;
  },
};

export default InputView;
