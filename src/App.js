import InputView from './View/InputView.js';
import OutputView from './View/OutView.js';
import LottoService from './Model/LottoService.js';

class App {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lottolService = new LottoService();
  }

  async run() {
    await this.collectUserInput(this.requestLottoPurchaseAmount);

    const lottos = this.lottolService.getUserLottoNumbers();
    this.outputView.printUserLotto(lottos);

    await this.collectUserInput(this.requestWinningNumber);
    await this.collectUserInput(this.requestBonusNumber);

    const winningInfo = this.lottolService.getWinningInfo();
    this.outputView.printWinningDetails(winningInfo);

    const winningRate = this.lottolService.getWinningRate(winningInfo);
    this.outputView.printWinningRate(winningRate);
  }

  requestLottoPurchaseAmount = async () => {
    const purchaseAmount = await this.inputView.requestPurchaseAmount();
    this.lottolService.setUserLotto(purchaseAmount);
  };

  requestWinningNumber = async () => {
    const WinningNumber = await this.inputView.requestWinningNum();
    this.lottolService.setWinningNumber(WinningNumber);
  };

  requestBonusNumber = async () => {
    const bonusNumber = await this.inputView.requestBonusNum();
    this.lottolService.setBonusNumber(bonusNumber);
  };

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
