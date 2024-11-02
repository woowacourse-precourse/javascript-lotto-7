import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import {
  validateMoney,
  validateWinningNumber,
  validateBonusNumber,
} from '../utils/validation.js';
import Lotto from '../Lotto.js';
import { getUniqueNumbers } from '../utils/getUniqueNumbers.js';
import { LOTTO } from '../constant/constants.js';
import { INPUT_MESSAGE } from '../constant/constants.js';
import MatchingMachine from '../model/MatchingMachine.js';
import { prizeByMatchCount } from '../constant/prizeByMatchCount.js';

export default class Controller {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async start() {
    const paidMoney = await this.getMoney();
    const lottos = await this.getLottos(paidMoney);
    this.outputView.printLottoPurchaseHistory(lottos);

    const { winningNumber, bonusNumber } =
      await this.getWinningNumberAndBonusNumber();

    const result = this.getCalculatedResult(winningNumber, bonusNumber, lottos);
    this.outputView.printWinningStatistics(result);
    const per = this.calculateProfitRate(paidMoney, result);
    this.outputView.printProfitRate(per);
  }

  calculateProfitRate(paidMoney, result) {
    let sum = 0;
    for (let key in result) {
      if (result[key] > 0) {
        sum += prizeByMatchCount[key].money;
      }
    }

    return ((sum / paidMoney) * 100).toFixed(1);
  }

  async getWinningNumberAndBonusNumber() {
    const winningNumberInput = await this.getWinningNumber();
    const winningNumber = winningNumberInput
      .split(',')
      .map((number) => +number);
    const bonusNumberInput = await this.getBonusNumber(winningNumber);
    const bonusNumber = Number(bonusNumberInput);

    return {
      winningNumber,
      bonusNumber,
    };
  }

  getCalculatedResult(winningNumber, bonusNumber, lottos) {
    const matchingMachine = new MatchingMachine(
      winningNumber,
      bonusNumber,
      lottos,
    );
    matchingMachine.matchLotto();

    return matchingMachine.getResult();
  }

  async getLottos(paidMoney) {
    const lottoCount = paidMoney / LOTTO.LOTTO_PRICE;
    const lottos = this.generateLottos(lottoCount);

    return lottos.map((lotto) => lotto.getNumbers().sort((a, b) => a - b));
  }

  generateLottos(lottoCount) {
    return Array.from({ length: lottoCount }, () => this.createLotto());
  }

  createLotto() {
    const lottoNumbers = getUniqueNumbers();

    return new Lotto(lottoNumbers);
  }

  async getBonusNumber(winningNumber) {
    try {
      const input = await this.inputView.getInput(INPUT_MESSAGE.BONUS_NUMBER);
      validateBonusNumber(input, winningNumber);

      return input;
    } catch (error) {
      this.outputView.printError(error.message);
      await this.getBonusNumber();
    }
  }

  async getWinningNumber() {
    try {
      const input = await this.inputView.getInput(INPUT_MESSAGE.WINNING_NUMBER);
      validateWinningNumber(input);

      return input;
    } catch (error) {
      this.outputView.printError(error.message);
      await this.getWinningNumber();
    }
  }

  async getMoney() {
    try {
      const input = await this.inputView.getInput(INPUT_MESSAGE.PURCHASE_PRICE);
      validateMoney(input);

      return input;
    } catch (error) {
      this.outputView.printError(error.message);
      await this.getMoney();
    }
  }
}
