import Input from "../view/Input.js";
import CONSTANT from "../constants/costant.js";
import TotalLotto from "../domains/TotalLotto.js";
import Output from "../view/Output.js";

class LottoGame {
  #lottos = [];

  async startLotto() {
    const input = new Input();
    const purchase = await input.getPurchaseAmount();
    const count = purchase / CONSTANT.PURCHASE_UNIT.UNIT_OF_LOTTO;
    this.getLottoList(count);
  }

  getLottoList(count) {
    const lottos = new TotalLotto(count);
    const lottosList = lottos.getLottos();

    const output = new Output();
    output.printRandomLotto(count, lottosList);
  }
}

export default LottoGame;