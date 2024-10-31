import { MissionUtils } from "@woowacourse/mission-utils";
import PurchasedLotto from "./PurchasedLotto.js";
class App {
  async run() {
    try {
      const purchaseAmount = await MissionUtils.Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      const lottoTickes = new PurchasedLotto(purchaseAmount);
      // const lottoNumbers = await MissionUtils.Console.readLineAsync(
      //   "당첨 번호를 입력해 주세요.\n"
      // );
      // const lottoBonusNumber = await MissionUtils.Console.readLineAsync(
      //   "보너스 번호를 입력해 주세요.\n"
      // );
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
