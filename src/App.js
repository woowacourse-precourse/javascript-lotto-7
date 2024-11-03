import { MissionUtils } from "@woowacourse/mission-utils";
import PurchasedLotto from "./models/PurchasedLotto.js";
import LottoController from "./controllers/LottoController.js";
import Validator from "./utils/Validator.js";
class App {
  async run() {
    try {
      const purchaseAmount = await MissionUtils.Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      Validator.validatePurchaseAmount(purchaseAmount);
      const lottoTickes = new PurchasedLotto(purchaseAmount);

      MissionUtils.Console.print(
        `${lottoTickes.getNumberOfTickets()}개를 구매했습니다.`
      );

      lottoTickes
        .getTickets()
        .forEach((ticket) =>
          MissionUtils.Console.print(`[${ticket.join(", ")}]`)
        );

      const lottoNumbers = await MissionUtils.Console.readLineAsync(
        "당첨 번호를 입력해 주세요.\n"
      );
      const lottoBonusNumber = await MissionUtils.Console.readLineAsync(
        "보너스 번호를 입력해 주세요.\n"
      );

      const lottoController = new LottoController(
        lottoNumbers,
        lottoBonusNumber,
        lottoTickes
      );

      lottoController.start();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
