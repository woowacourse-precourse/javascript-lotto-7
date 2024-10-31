import InputView from "./view/InputView.js";
import LottoNumbersModel from "./model/LottoNumbersModel.js";
import OutputView from "./view/OutputView.js";
import Lotto from "./model/Lotto.js";

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

    const lottoAnswer = await this.inputView.getLottoAnswer();
    this.lotto = new Lotto(lottoAnswer);
    const bonusAnswer = await this.inputView.getBonusAnswer(lottoAnswer);
    const winningCount = this.lotto.CountWinningStats(
      lottoNumbers,
      bonusAnswer
    );

    this.outputView.printWinningCount(winningCount);
  }
}

export default App;
