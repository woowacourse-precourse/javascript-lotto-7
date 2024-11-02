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

    this.printLottoNumbers();

    await this.collectUserInput(this.requestWinningNumber);
    await this.collectUserInput(this.requestBonusNumber);

    this.printWinningDetails();
    this.printWinningRate();
  }

  requestLottoPurchaseAmount = async () => {
    const purchaseAmount = await this.inputView.requestPuchaseAmount();
    this.lottolService.buyUserLotto(purchaseAmount);
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
    const lottos = this.lottolService.getUserLottoNumbers();
    this.outputView.printPurchasedLotto(lottos);
  }

  printWinningDetails() {
    const winningInfo = this.lottolService.getWinningDetails();
    this.outputView.printWinningDetails(winningInfo);
    return winningInfo;
  }

  printWinningRate(winningInfo) {
    const rateOfReturn = this.lottolService.getWinningRate(winningInfo);
    this.outputView.printWinningRate(rateOfReturn);
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
