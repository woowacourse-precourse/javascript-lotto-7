import Customer from "./model/Customer.js";
import Lotto from "./Lotto.js";
import LottoChecker from "./model/LottoChecker.js";
import InputView from "./view/InputView.js";

class App {
  async run() {
    const input = new InputView();
    const customer = new Customer();
    const lottoChecker = new LottoChecker();
    

    // 로또 구매 및 출력
    const purchaseAmount = await input.readPurchaseAmount();
    customer.purchaseLotto(purchaseAmount);
    customer.getLottoNumberList();
    
    // 생성한 번호 출력
    customer.lottoNumbersPrint();

    const winningNumbers = await input.readWinningNumbers();
    const lotto = new Lotto(winningNumbers);
    const validWinningNumbers = lotto.getNumbers();
    const bonusNumber = await input.readBonusNumber();

    lottoChecker.setWinningAndBonusNumbers(validWinningNumbers, bonusNumber);
    customer.getLottoResults(lottoChecker);

    customer.calculateProfit();
    customer.lottoResultPrint();

    

    

  }
}

export default App;
