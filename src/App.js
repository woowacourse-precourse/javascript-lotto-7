import { MissionUtils } from "@woowacourse/mission-utils";
import PurchasedLotto from "./PurchasedLotto.js";
import LottoService from "./LottoService.js";
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
        `${lottoTickes.getNumberOfTickets()}개를 구입했습니다.`
      );

      lottoTickes
        .getTickets()
        .forEach((ticket) => MissionUtils.Console.print(ticket));

      const lottoNumbers = await MissionUtils.Console.readLineAsync(
        "당첨 번호를 입력해 주세요.\n"
      );
      const lottoBonusNumber = await MissionUtils.Console.readLineAsync(
        "보너스 번호를 입력해 주세요.\n"
      );

      const lottoService = new LottoService(
        lottoNumbers,
        lottoBonusNumber,
        lottoTickes
      );

      lottoService.start();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
