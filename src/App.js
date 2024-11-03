import { Console } from "@woowacourse/mission-utils";
import LottoView from "./LottoView.js";

class App {
  #view;

  constructor() {
    this.#view = new LottoView();
  }

  async run() {
    const purchaseAmount = await this.#view.getPurchaseAmount();
    Console.print(`구입금액: ${purchaseAmount}원`);

    const winningNumbers = await this.#view.getWinningNumbers();
    Console.print(winningNumbers);

    const bonusNumber = await this.#view.getBonusNumber();
    Console.print(`보너스 번호: ${bonusNumber}`);
  }
}

export default App;
