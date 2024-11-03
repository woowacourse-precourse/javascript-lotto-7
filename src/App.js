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
    // 구매금액 입력
    const purchaseAmount = await this.IOHandler.getPurchaseAmount();

    // 로또 게임 시작
    const lottoGame = new LottoGame(purchaseAmount / LOTTO_PRICE);

    // 구매 개수만큼 로또 생성
    lottoGame.CreateLotto();

    // 당첨 번호, 보너스 번호 입력
    const winningNumbers = await this.IOHandler.getLottoNumbers();
    const bonusNumber = await this.IOHandler.getBonusNumber();

    // 당첨 여부 계산
    lottoGame.CheckLottos(winningNumbers, bonusNumber);

    // const bonusNumber = await this.IOHandler.getInput(INPUT_MESSAGE.GET_BONUS_NUMBER);
    // Console.print(bonusNumber);
    // this.Lotto = new Lotto(lottoNumbers);
    // this.Lotto.start();
  }
}

export default App;
