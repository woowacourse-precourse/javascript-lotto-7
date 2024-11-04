import InputHandler from './Model/InputHandler.js';
import Lotto from './Model/Lotto.js';
import Input from './View/Input.js';
import User from './Model/User.js';
import Output from './View/Output.js';
import ErrorHandler from './Model/ErrorHandler.js';

class App {
  async run() {
    const purchaseAmount = await Input.purchaseAmount();
    ErrorHandler.validateNumericInput(purchaseAmount);

    const user = new User(purchaseAmount);
    const userLottoList = user.getLottoList();
    const purchaseCount = user.getPurchaseCount();
    Output.printLottoCount(purchaseCount);
    Output.printLottoList(userLottoList);

    const lotteryNumber = await Input.lotteryNumber();
    const lottoArray = InputHandler.lottoArray(lotteryNumber);
    const lotto = new Lotto(lottoArray);

    const bonusNumber = await Input.bonusNumber();
    ErrorHandler.validateNumericInput(bonusNumber);

    userLottoList.forEach((myLotto) => {
      const count = lotto.lotteryStatus(myLotto);
      const hasBonusNumber = lotto.haveBonusNumber(myLotto, bonusNumber);
      user.setLotteryStatistics(count, hasBonusNumber);
    });

    const lotteryStatistics = user.getLotteryStatistics();
    Output.printLotteryStatistics(lotteryStatistics);

    user.calculateProfitRate(lotteryStatistics);
    const profitRate = user.getProfitRate();
    Output.printProfitRate(profitRate);
  }
}

export default App;
