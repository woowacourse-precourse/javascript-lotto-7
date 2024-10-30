import InputView from "./view/InputView.js";
import LottoNumbersModel from "./model/LottoNumbersModel.js";

class App {
  constructor() {
    this.inputView = new InputView();
    this.lottoNumbersModel = new LottoNumbersModel();
  }
  async run() {
    const lottoPrice = await this.inputView.getLottoPrice();
    const lottoNumbers = this.lottoNumbersModel.generate(lottoPrice);
  }
}

export default App;
