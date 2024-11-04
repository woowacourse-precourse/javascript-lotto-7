import InputLotto from "../views/InputLotto.js";
import validators from "../utils/Validators.js";
import { generateLottoNumbers } from "../utils/generateLottoNumbers.js";
import { Console } from "@woowacourse/mission-utils";
import OutputLotto from "../views/OutputLotto.js";
import LottoModel from "../models/LottoModel.js";

class LottoController {
  #inputLotto;
  #outputLotto;

  constructor() {
    this.#inputLotto = new InputLotto();
    this.#outputLotto = new OutputLotto();
  }

  async start() {
    try {
      const purchaseAmount = await this.#inputLotto.getPurchaseAmount();
      validators.checkMoneyInput(purchaseAmount);
      validators.checkDivisible(purchaseAmount);
      validators.checkLimitMoney(purchaseAmount);

      const lottoModel = new LottoModel(Math.floor(purchaseAmount / 1000));
      const lottoTickets = lottoModel.getLottoTickets();
      this.#outputLotto.showLottoNumbers(lottoTickets);

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
