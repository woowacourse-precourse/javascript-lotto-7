import InputHandler from "./InputHandler.js";
import LottoGame from "./LottoGame.js";
import { LOTTO_PRICE } from "./Constant.js";

class App {
  constructor() {
    this.Lotto;
    this.InputHandler = new InputHandler();
  }
  async run() {
    // 구매금액 입력
    const purchaseAmount = await this.InputHandler.getPurchaseAmount();

    // 로또 게임 시작
    const lottoGame = new LottoGame(purchaseAmount / LOTTO_PRICE);

    // 구매 개수만큼 로또 생성
    lottoGame.CreateLotto();

    // 당첨 번호, 보너스 번호 입력
    const winningNumbers = await this.InputHandler.getLottoNumbers();
    const bonusNumber = await this.InputHandler.getBonusNumber();

    // 당첨 여부 계산
    lottoGame.CheckLottos(winningNumbers, bonusNumber);

    // 결과 출력
    lottoGame.printLottoResult(purchaseAmount);
  }
}

export default App;
