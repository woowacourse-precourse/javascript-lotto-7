import InputLotto from "../views/InputLotto.js";
import validators from "../utils/Validators.js";
import { generateLottoNumbers } from "../utils/generateLottoNumbers.js";
import { Console } from "@woowacourse/mission-utils";
import OutputLotto from "../views/OutputLotto.js";
import LottoModel from "../models/LottoModel.js";
import { LOTTO_SETTING } from "../constants/Settings.js";

class LottoController {
  #inputLotto;
  #outputLotto;
  #lottoModel;

  constructor() {
    this.#inputLotto = new InputLotto();
    this.#outputLotto = new OutputLotto();
  }

  async start() {
    const purchaseAmount = await this.handlePurchaseAmount();
    const lottoModel = new LottoModel(
      Math.floor(purchaseAmount / LOTTO_SETTING.PRICE_OF_EACH_LOTTO)
    );
    this.#lottoModel = lottoModel;

    const lottoTickets = lottoModel.getLottoTickets();
    this.#outputLotto.showLottoNumbers(lottoTickets);

    const lottoNumbers = await this.handleLottoNumbers();
    const bonusNumber = await this.handleBonusNumber(lottoNumbers);

    const matchCounts = lottoModel.calculateMatches(lottoNumbers, bonusNumber);

    this.#outputLotto.showMatchStatistics(matchCounts);
    this.#outputLotto.showRateOfReturn(
      lottoModel.calc_rate_of_return(matchCounts, purchaseAmount)
    );
  }

  async handlePurchaseAmount() {
    let isValid = false;
    let purchaseAmount;

    while (!isValid) {
      try {
        purchaseAmount = await this.#inputLotto.getPurchaseAmount();
        validators.checkMoneyInput(purchaseAmount);
        validators.checkMinMoneyInput(purchaseAmount);
        validators.checkDivisible(purchaseAmount);
        validators.checkLimitMoney(purchaseAmount);
        isValid = true;
        return purchaseAmount;
      } catch (error) {
        Console.print(`${error.message}`);
        throw error;
      }
    }
  }

  async handleLottoNumbers() {
    let isValid = false;
    let lottoNumbers;

    while (!isValid) {
      try {
        lottoNumbers = await this.#inputLotto.getInputNumbers();
        validators.checkNumberOfLotto(lottoNumbers);
        lottoNumbers.forEach((number) => {
          validators.checkNumber(number);
          validators.checkRangeOfNumber(number);
        });
        validators.checkDuplicateNumber(lottoNumbers);
        isValid = true;
        return lottoNumbers;
      } catch (error) {
        Console.print(`${error.message}`);
      }
    }
  }

  async handleBonusNumber(lottoNumbers) {
    let isValid = false;
    let bonusNumber;

    while (!isValid) {
      try {
        bonusNumber = await this.#inputLotto.getBonusNumber();
        validators.checkNumber(bonusNumber);
        validators.checkRangeOfNumber(bonusNumber);
        validators.checkBonusNumber(bonusNumber, lottoNumbers);
        isValid = true;
        return bonusNumber;
      } catch (error) {
        Console.print(`${error.message}`);
      }
    }
  }
}

export default LottoController;
