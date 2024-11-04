import LottoValidator from "./validators/LottoValidator.js";
import InputView from "./view/InputView.js";

class App {
  async run() {
    const input = new InputView();
    
    const purchaseAmount = await input.readPurchaseAmount();
    const winningNumbers = await input.readWinningNumbers();
    const bonusNumber = await input.readBonusNumber();
    const allLottoNumbers = [...winningNumbers, bonusNumber];
    LottoValidator.validateDuplicateNumbers(allLottoNumbers);
    allLottoNumbers.forEach(LottoValidator.validatorSingleNumber);



    

  }
}

export default App;
