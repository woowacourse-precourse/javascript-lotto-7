// @ts-check
import PurchaseAmountValidationStrategy from '../validation/purchase-amount-validation.strategy.js';
import WinningNumbersValidationStrategy from '../validation/winning-numbers-validation.strategy.js';
import ValidationContext from '../validation/validation.context.js';

import LotteryMachineModel from './lottery-machine.model.js';
import BonusNumberValidationStrategy from '../validation/bonus-number-validation.strategy.js';

class LotteryMachineService {
  /** @type {LotteryMachineModel} */
  #lotteryMachineModel;

  /** @type {ValidationContext} */
  #lotteryMachineValidator;

  /**
   *
   * @param {{ models: { LotteryMachineModel: LotteryMachineModel }; providers: { ValidationContext: ValidationContext } }} param
   */
  constructor({ models, providers }) {
    const { LotteryMachineModel: lotteryMachineModel } = models;
    const { ValidationContext: lotteryMachineValidator } = providers;

    this.#lotteryMachineModel = lotteryMachineModel;
    this.#lotteryMachineValidator = lotteryMachineValidator;
  }

  /**
   *
   * @param {string} purchaseAmount
   * @returns {number}
   */
  #parsePurchaseAmount(purchaseAmount) {
    return Number(purchaseAmount);
  }

  /**
   *
   * @param {string} purchaseAmount
   */
  inputPurchaseAmount(purchaseAmount) {
    this.#lotteryMachineValidator.validate(
      new PurchaseAmountValidationStrategy(purchaseAmount, this.#parsePurchaseAmount),
    );

    this.#lotteryMachineModel.setPurchaseAmount(this.#parsePurchaseAmount(purchaseAmount));
  }

  /**
   *
   * @param {string} winningNumbers
   * @returns {Array<number>}
   */
  #parseWinningNumbers(winningNumbers) {
    return winningNumbers.split(',').map(Number);
  }

  /**
   *
   * @param {string} winningNumbers
   */
  inputWinningNumbers(winningNumbers) {
    this.#lotteryMachineValidator.validate(
      new WinningNumbersValidationStrategy(winningNumbers, this.#parseWinningNumbers),
    );

    this.#lotteryMachineModel.setWinningNumbers(this.#parseWinningNumbers(winningNumbers));
  }

  /**
   *
   * @param {string} bonusNumber
   * @returns {number}
   */
  #parseBonusNumber(bonusNumber) {
    return Number(bonusNumber);
  }

  /**
   *
   * @param {string} bonusNumber
   */
  inputBonusNumber(bonusNumber) {
    this.#lotteryMachineValidator.validate(
      new BonusNumberValidationStrategy(
        bonusNumber,
        this.#parseBonusNumber,
        this.#lotteryMachineModel.getWinningNumbers(),
      ),
    );

    this.#lotteryMachineModel.setBonusNumber(this.#parseBonusNumber(bonusNumber));
  }
}

export default LotteryMachineService;
