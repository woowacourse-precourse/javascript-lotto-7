import InputLotto from "../views/InputLotto.js";
import validators from "../utils/Validators.js";
import { Console } from "@woowacourse/mission-utils";
import OutputLotto from "../views/OutputLotto.js";
import LottoModel from "../models/LottoModel.js";
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
      this.#validatePurchaseAmount(purchaseAmount);

      const lottoModel = this.#createLottoModel(purchaseAmount);
      const lottoTickets = lottoModel.getLottoTickets();
      this.#outputLotto.showLottoNumbers(lottoTickets);

      const lottoNumbers = await this.#getValidLottoNumbers();
      const bonusNumber = await this.#getValidBonusNumber(lottoNumbers);

      const matchCounts = lottoModel.calculateMatches(
        lottoNumbers,
        bonusNumber
      );

      this.#displayResults(matchCounts, purchaseAmount, lottoModel);
    } catch (error) {
      Console.print(`${error.message}`);
    }
  }

  #validatePurchaseAmount(amount) {
    validators.checkMoneyInput(amount);
    validators.checkMinMoneyInput(amount);
    validators.checkDivisible(amount);
    validators.checkLimitMoney(amount);
  }

  #createLottoModel(amount) {
    const ticketCount = Math.floor(amount / LOTTO_SETTING.PRICE_OF_EACH_LOTTO);
    return new LottoModel(ticketCount);
  }

  async #getValidLottoNumbers() {
    const lottoNumbers = await this.#inputLotto.getInputNumbers();
    validators.checkNumberOfLotto(lottoNumbers);
    lottoNumbers.forEach((number) => {
      validators.checkNumber(number);
      validators.checkRangeOfNumber(number);
    });
    validators.checkDuplicateNumber(lottoNumbers);
    return lottoNumbers;
  }

  async #getValidBonusNumber(lottoNumbers) {
    const bonusNumber = await this.#inputLotto.getBonusNumber();
    validators.checkNumber(bonusNumber);
    validators.checkRangeOfNumber(bonusNumber);
    validators.checkBonusNumber(bonusNumber, lottoNumbers);
    return bonusNumber;
  }

  #displayResults(matchCounts, purchaseAmount, lottoModel) {
    this.#outputLotto.showMatchStatistics(matchCounts);
    const rateOfReturn = lottoModel.calc_rate_of_return(
      matchCounts,
      purchaseAmount
    );
    this.#outputLotto.showRateOfReturn(rateOfReturn);
  }
}

export default LottoController;
