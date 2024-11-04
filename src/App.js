import { MissionUtils } from "@woowacourse/mission-utils/src";
import Lotto from "./Lotto.js";
class App {
  async run() {
    async function getLottoPurchaseAmount() {
      const PURCHASE_AMOUNT = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
      return PURCHASE_AMOUNT;
    }
    async function getLottoWinningNumbers() {
      const WINNING_NUMBERS = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해주세요')
      return WINNING_NUMBERS;
    }
  }
}

export default App;
