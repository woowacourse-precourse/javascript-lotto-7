import LottoGame from "./LottoGame.js";
import { getBonusNumber, getNumbers, getPurchaseAmount } from "./utils/input.js";

class App {
  async run() {
    const purchaseAmount = await getPurchaseAmount();
    const winningNumbers = await getNumbers("당첨 번호를 입력해 주세요.");
    const bonusNumber = await getBonusNumber(winningNumbers);

    const lottoGame = new LottoGame(purchaseAmount, winningNumbers, bonusNumber);

    lottoGame.start();
  }
}

export default App;
