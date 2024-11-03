import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import {
  validateMoney,
  validateWinningNumber,
  validateBonusNumber,
} from '../utils/validation.js';
import { LOTTO } from '../constant/constants.js';
import { INPUT_MESSAGE } from '../constant/constants.js';
import LottoResult from '../model/LottoResult.js';
import ProfitRate from '../model/ProfitRate.js';
import { getLottos } from '../utils/generateLottos.js';

export default class Controller {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async start() {
    const paidMoney = await this.getMoney();
    const lottos = getLottos(paidMoney);
    this.outputView.printLottoPurchaseHistory(lottos);

    const winningNumbers = await this.getWinningNumberAndBonusNumber();
    const lottoResult = new LottoResult(winningNumbers, lottos);
    this.outputView.printWinningStatistics(lottoResult);

    const profitRate = new ProfitRate(paidMoney, lottoResult.getResult());
    this.outputView.printProfitRate(profitRate.getProfitRate());
  }

  async getWinningNumberAndBonusNumber() {
    const winningNumberInput = await this.getWinningNumber();
    const winningNumber = winningNumberInput
      .split(LOTTO.LOTTO_NUMBER_SEPARATOR)
      .map((number) => +number);
    const bonusNumberInput = await this.getBonusNumber(winningNumber);
    const bonusNumber = Number(bonusNumberInput);

    return {
      winningNumber,
      bonusNumber,
    };
  }

  async getMoney() {
    return this.getValidatedInputWithRetry(
      INPUT_MESSAGE.PURCHASE_PRICE,
      validateMoney,
    );
  }

  async getWinningNumber() {
    return this.getValidatedInputWithRetry(
      INPUT_MESSAGE.WINNING_NUMBER,
      validateWinningNumber,
    );
  }

  async getBonusNumber(winningNumber) {
    return this.getValidatedInputWithRetry(
      INPUT_MESSAGE.BONUS_NUMBER,
      validateBonusNumber,
      winningNumber,
    );
  }

  async getValidatedInputWithRetry(message, validate, winningNumber) {
    try {
      const input = await this.inputView.getInput(message);
      validate(input, winningNumber);
      return input;
    } catch (error) {
      this.outputView.printError(error.message);
      return await this.getValidatedInputWithRetry(
        message,
        validate,
        winningNumber,
      );
    }
  }
}
