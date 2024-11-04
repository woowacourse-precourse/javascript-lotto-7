// App.js
import LottoController from "./controllers/LottoController.js";
import PurchasedLotto from "./models/PurchasedLotto.js";
import Validator from "./utils/Validator.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const purchaseAmount = await this.#getInput(
        "구입 금액을 입력해 주세요.\n"
      );
      Validator.validatePurchaseAmount(purchaseAmount);

      const lottoTickets = new PurchasedLotto(purchaseAmount);

      lottoTickets.printPurchasedLotto(lottoTickets.getTickets());

      const winningNumbers = await this.#getInput(
        "당첨 번호를 입력해 주세요.\n"
      );
      const bonusNum = await this.#getInput("보너스 볼을 입력해 주세요.\n");

      const lottoController = new LottoController(
        winningNumbers,
        bonusNum,
        lottoTickets
      );
      lottoController.start();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  async #getInput(prompt) {
    return await MissionUtils.Console.readLineAsync(prompt);
  }
}

export default App;
