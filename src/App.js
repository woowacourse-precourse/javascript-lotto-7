import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Vaild from "./Valid.js";

class App {
  async run() {
    const AMOUNT_VALIDATOR = new Vaild();

    // 로또 구입 금액을 입력받는 함수
    async function getLottoPurchaseAmount() {
      while (true) {
        try {
          const PURCHASE_AMOUNT = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
          AMOUNT_VALIDATOR.validate(parseInt(PURCHASE_AMOUNT, 10));
          return PURCHASE_AMOUNT;
        } catch (error) {
          console.error(error.message);
        }
      }
    }

    // 당첨 번호를 입력받는 함수
    async function getLottoWinningNumbers() {
      const WINNING_NUMBERS = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해주세요');
      return WINNING_NUMBERS;
    }

    const purchaseAmount = await getLottoPurchaseAmount();
    MissionUtils.Console.print(`Validated purchase amount: ${purchaseAmount}`);
  }
}

export default App;