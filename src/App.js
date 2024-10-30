import InputView from "./view/InputView.js";
import LottoNumbersModel from "./model/LottoNumbersModel.js";
import OutputView from "./view/OutputView.js";

class App {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lottoNumbersModel = new LottoNumbersModel();
  }
  async run() {
    const lottoPrice = await this.inputView.getLottoPrice();
    const lottoCount = this.lottoNumbersModel.getCount(lottoPrice);
    const lottoNumbers = this.lottoNumbersModel.generate(lottoCount);
    this.outputView.printLottoNumber(lottoNumbers);
  }
}

export default App;
