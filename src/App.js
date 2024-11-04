import Output from './View/OutPut.js';

import Lotto from './Lotto.js';

import ValidInput from './Utills/ValidInput.js';
import User from './User.js';
import Controller from './Controller.js';

class App {
  async run() {
    const purchasedMoney = await ValidInput.getPurchaseMoney();
    const winningNumbers = await ValidInput.getLottoWinningNumbers();
    const bonusNumber = await ValidInput.getBonusNumber(winningNumbers);

    const user = new User(purchasedMoney);
    const lotto = new Lotto(winningNumbers);
    const controller = new Controller(lotto, user);

    controller.playLottoSystem(bonusNumber);
    Output.printAllOfResult(user);
  }
}

export default App;
