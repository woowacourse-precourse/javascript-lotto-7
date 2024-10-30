import InputView from "./view/InputView.js";
import LottoNumbersModel from "./model/LottoNumbersModel.js";

class App {
  constructor() {
    this.inputView = new InputView();
    this.lottoNumbersModel = new LottoNumbersModel();
  }
  async run() {
    const lottoPrice = await this.inputView.getLottoPrice();
    const lottoCount = this.lottoNumbersModel.getCount(lottoPrice);
    const lottoNumbers = this.lottoNumbersModel.generate(lottoCount);
  }
}

export default App;
