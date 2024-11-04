import InputLotto from "../views/InputLotto.js";
import validators from "../utils/Validators.js";
import { generateLottoNumbers } from "../utils/generateLottoNumbers.js";
import { Console } from "@woowacourse/mission-utils";
import OutputLotto from "../views/OutputLotto.js";
import LottoModel from "../models/LottoModel.js";
import Lotto from "../Lotto.js";
import { LOTTO_SETTING } from "../constants/Settings.js";

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
      validators.checkMinMoneyInput(purchaseAmount);
      validators.checkDivisible(purchaseAmount);
      validators.checkLimitMoney(purchaseAmount);

      const lottoModel = new LottoModel(
        Math.floor(purchaseAmount / LOTTO_SETTING.PRICE_OF_EACH_LOTTO)
      );
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

      const matchCounts = lottoModel.calculateMatches(
        lottoNumbers,
        bonusNumber
      );

      this.#outputLotto.showMatchStatistics(matchCounts);
      this.#outputLotto.showRateOfReturn(
        lottoModel.calc_rate_of_return(matchCounts, purchaseAmount)
      );
    } catch (error) {
      Console.print(`${error.message}`);
    }
  }
}

export default LottoController;
