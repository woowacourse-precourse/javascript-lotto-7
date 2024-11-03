import LottoInput from "./views/LottoInput.js";

class App {
  async run() {
    const lottoInput = new LottoInput();
    let lottoPrice = await lottoInput.lottoPriceInput();
    let [lottoWinArr, lottoBonusNum] = await lottoInput.lottoWinInput();
    console.log(lottoWinArr, lottoBonusNum);
  }
}

export default App;
