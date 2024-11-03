import LottoInput from "./views/LottoInput.js";

class App {
  async run() {
    const lottoInput = new LottoInput();
    let lottoPrice = await lottoInput.lottoPriceInput();
  }
}

export default App;
