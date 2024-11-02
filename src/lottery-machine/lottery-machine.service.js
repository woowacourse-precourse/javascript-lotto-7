// @ts-check
import PurchaseAmountValidationStrategy from '../validation/purchase-amount-validation.strategy.js';
import ValidationContext from '../validation/validation.context.js';

import LotteryMachineModel from './lottery-machine.model.js';

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
   */
  inputPurchaseAmount(purchaseAmount) {
    this.#lotteryMachineValidator.validate(new PurchaseAmountValidationStrategy(purchaseAmount));

    this.#lotteryMachineModel.setPurchaseAmount(Number(purchaseAmount));
  }
}

export default LotteryMachineService;
