import Customer from "./model/Customer.js";
import Lotto from "./model/Lotto.js";
import LottoValidator from "./validators/LottoValidator.js";
import InputView from "./view/InputView.js";

class App {
  async run() {
    const input = new InputView();
    const customer = new Customer();
    const lotto = new Lotto();
    

    // 로또 구매 및 출력
    const purchaseAmount = await input.readPurchaseAmount();
    customer.purchaseLotto(purchaseAmount);
    customer.getLottoNumberList();
    
    // 생성한 번호 출력

    const winningNumbers = await input.readWinningNumbers();
    const bonusNumber = await input.readBonusNumber();
    const allLottoNumbers = [...winningNumbers, bonusNumber];
    LottoValidator.validateDuplicateNumbers(allLottoNumbers);
    allLottoNumbers.forEach(LottoValidator.validatorSingleNumber);

    lotto.setWinningAndBonusNumbers(winningNumbers, bonusNumber);
    customer.getLottoResults(lotto);

    

    

  }
}

export default App;
