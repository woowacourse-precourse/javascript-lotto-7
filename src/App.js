import Lotto from "./Lotto.js";
import IOHandler from "./IOHandler.js";
import { Console, Random } from "@woowacourse/mission-utils";
import LottoGame from "./LottoGame.js";
import { LOTTO_PRICE } from "./Constant.js";

class App {
  constructor() {
    this.Lotto;
    this.IOHandler = new IOHandler();
  }
  async run() {
    const purchaseAmount = await this.IOHandler.getPurchaseAmount();
    const lottoGame = new LottoGame(purchaseAmount / LOTTO_PRICE);
    lottoGame.CreateLotto();
    const lottoNumbers = await this.IOHandler.getLottoNumbers();

    // const bonusNumber = await this.IOHandler.getInput(INPUT_MESSAGE.GET_BONUS_NUMBER);
    // Console.print(bonusNumber);
    // this.Lotto = new Lotto(lottoNumbers);
    // this.Lotto.start();
  }
}

export default App;
