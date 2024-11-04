import Input from "../view/Input.js";
import CONSTANT from "../constants/costant.js";
import TotalLotto from "../domains/TotalLotto.js";
import WinningLotto from "../domains/WinningLotto.js";
import Output from "../view/Output.js";

class LottoGame {
  #lottos = [];

  async startLotto() {
    const input = new Input();
    const purchase = await input.getPurchaseAmount();
    const count = purchase / CONSTANT.PURCHASE_UNIT.UNIT_OF_LOTTO;
    this.#getLottoList(count);

    const winNumber = await input.getLottoNumber();
    const bonusNumber = await input.getBonusNumber();

    this.#printTotalResult(winNumber, bonusNumber, purchase);
  }

  #getLottoList(count) {
    const lottos = new TotalLotto(count);
    this.#lottos = lottos.getLottos();

    const output = new Output();
    output.printRandomLotto(count, this.#lottos);
  }

  #printTotalResult(winningNumbers, bonus, purchase) {
    const winningLotto = new WinningLotto(this.#lottos, winningNumbers, bonus);
    const result = winningLotto.resultLotto();
    const percentage = winningLotto.calculatePercent(purchase);

    const output = new Output();
    output.printWinningResult(result, percentage);
  }
}

export default LottoGame;