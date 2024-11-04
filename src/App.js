import LottoController from "./controllers/LottoController.js";
import LottoInput from "./views/LottoInput.js";

class App {
  async run() {
    const lottoInput = new LottoInput();
    let lottoPrice = await lottoInput.lottoPriceInput();
    let [lottoWinArr, lottoBonusNum] = await lottoInput.lottoWinInput();
    const lottoController = new LottoController();
    lottoController.calcWinStat(lottoWinArr, lottoBonusNum, lottoPrice);
  }
}

export default App;
