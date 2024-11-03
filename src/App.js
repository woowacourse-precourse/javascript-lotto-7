import LottoMachine from "./LottoMachine.js";
import Lotto from "./Lotto.js";
import { Console } from '@woowacourse/mission-utils';
import InputUtils from "./Utils/Utils.js";


class App {
  async run() {


    try {

      const purchaseAmount = await InputUtils.inputPurchaseAmount();
      
      const lottoMachine = new LottoMachine(purchaseAmount);

      lottoMachine.printNumberofPurchase();
      lottoMachine.printLotto();

      const winningNumber = await InputUtils.inputWinningNumber();

    } catch (error) {
    }



  }
}

export default App;
