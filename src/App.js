import LottoController from "./controllers/LottoController.js";
import LottoInput from "./views/LottoInput.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const lottoInput = new LottoInput();
    const lottoController = new LottoController();

    let lottoPrice = await lottoInput.lottoPriceInput();
    let [lottoWinArr, lottoBonusNum] = await lottoInput.lottoWinInput();
    const winLottoValid = new Lotto(lottoWinArr);
    lottoController.calcWinStat(winLottoValid, lottoBonusNum, lottoPrice);
  }
}

export default App;
