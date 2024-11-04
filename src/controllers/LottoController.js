import InputLotto from "../views/InputLotto.js";
import validators from "../utils/Validators.js";

class LottoController {
  #inputLotto;

  constructor() {
    this.#inputLotto = new InputLotto();
  }

  async start() {
    try {
      const purchaseAmount = await this.#inputLotto.getPurchaseAmount();
      validators.checkMoneyInput(purchaseAmount);
      validators.checkDivisible(purchaseAmount);
      validators.checkLimitMoney(purchaseAmount);

      const lottoNumbers = await this.#inputLotto.getInputNumbers();
      validators.checkNumberOfLotto(lottoNumbers);
      lottoNumbers.forEach((number) => {
        validators.checkNumber(number);
        validators.checkRangeOfNumber(number);
      });
      validators.checkDuplicateNumber(lottoNumbers);

      const bonusNumber = await this.#inputLotto.getBonusNumber();
      validators.checkNumber(bonusNumber);
      validators.checkRangeOfNumber(bonusNumber);
      validators.checkBonusNumber(bonusNumber, lottoNumbers);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default LottoController;
