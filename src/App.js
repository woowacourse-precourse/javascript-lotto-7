import LottoMachine from "./LottoMachine.js";
import Lotto from "./Lotto.js";
import { Console } from '@woowacourse/mission-utils';
import InputUtils from "./Utils/Utils.js";


class App {
  async run() {

    const purchaseAmount = await InputUtils.inputPurchaseAmount();

    const lottoMachine = new LottoMachine(purchaseAmount);

    lottoMachine.printNumberofPurchase();
    lottoMachine.printLotto();

    const winningNumber = await InputUtils.inputWinningNumber();
    const bonusNumber = await InputUtils.inputBonusNumber(winningNumber);

    lottoMachine.setWinningNumber(winningNumber, bonusNumber);

    const totalWinningAmount = lottoMachine.checkWinningLotto();
    lottoMachine.printWinningStatistics();

    const propit = lottoMachine.calculatePropit(totalWinningAmount);

    lottoMachine.printPropit(propit);


  }
}

export default App;
