import InputView from '../view/InputView.js';

class Controller {
  async start() {
    const lottoPurchaseAmount = await InputView.readLottoPurchaseAmount();
    const winningNumber = await InputView.readWinningNumber();
    const bonusNumber = await InputView.readBonusNumber();
    
    
  }
}

export default Controller;
