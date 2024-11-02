import InputView from './View/InputView.js';
import OutputView from './View/OutView.js';
import LottoService from '../src/Model/LottoService.js';

class App {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lottolService = new LottoService();
  }

  async run() {
    await this.collectUserInput(this.requestLottoPurchaseAmount);

    this.printLottoNumbers();

    await this.collectUserInput(this.requestWinningNumber);
    await this.collectUserInput(this.requestBonusNumber);

    this.printRateOfReturn(this.printWinningNumbers());
  }

  requestLottoPurchaseAmount = async () => {
    const purchaseAmount = await this.inputView.requestPuchaseAmount();
    this.lottolService.setPurcharedAmount(purchaseAmount);
  };

  requestWinningNumber = async () => {
    const WinningNumber = await this.inputView.requestWinningNum();
    this.lottolService.setWinningNumber(WinningNumber);
  };

  requestBonusNumber = async () => {
    const bonusNumber = await this.inputView.requestBonusNum();
    this.lottolService.setBonusNumber(bonusNumber);
  };

  printLottoNumbers() {
    this.lottolService.drawLottos();
    const lottos = this.lottolService.getLottos();
    this.outputView.printLotto(lottos);
  }

  printWinningNumbers() {
    const winningInfo = this.lottolService.getAllWinningDetail();
    this.outputView.printWinningInfo(winningInfo);
    return winningInfo;
  }

  printRateOfReturn(winningInfo) {
    const rateOfReturn = this.lottolService.getRateOfReturn(winningInfo);
    this.outputView.printRateOfReturn(rateOfReturn);
  }

  async collectUserInput(requestCallbackFunc) {
    while (true) {
      try {
        await requestCallbackFunc();
        return;
      } catch (errorMsg) {
        this.outputView.print(errorMsg.message);
      }
    }
  }
}

export default App;
