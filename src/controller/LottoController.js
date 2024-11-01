import CalculateProfitModel from "../model/CalculateProfitModel.js";
import Lotto from "../model/Lotto.js";
import LottoNumbersModel from "../model/LottoNumbersModel.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class LottoController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lottoNumbersModel = new LottoNumbersModel();
    this.calculateProfitModel = new CalculateProfitModel();
    this.lotto = null;
  }
  async setLottoNumbers() {
    const lottoPrice = await this.inputView.getLottoPrice();
    const lottoCount = this.lottoNumbersModel.getCount(lottoPrice);
    const lottoNumbers = this.lottoNumbersModel.generate(lottoCount);
    this.outputView.printLottoNumber(lottoNumbers);
    return { lottoPrice, lottoNumbers };
  }
  async setLottoAnswers() {
    const lottoAnswer = await this.inputView.getLottoAnswer();
    this.lotto = new Lotto(lottoAnswer);
    const bonusAnswer = await this.inputView.getBonusAnswer(lottoAnswer);
    return bonusAnswer;
  }
  countWinning(lottoNumbers, bonusAnswer) {
    const winningCount = this.lotto.CountWinningStats(
      lottoNumbers,
      bonusAnswer
    );
    this.outputView.printWinningCount(winningCount);
    return winningCount;
  }
  calculateProfit(winningCount, lottoPrice) {
    const rate = this.calculateProfitModel.getRate(winningCount, lottoPrice);
    this.outputView.printProfitRate(rate);
  }
}

export default LottoController;
