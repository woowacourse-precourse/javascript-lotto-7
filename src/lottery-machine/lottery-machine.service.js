// @ts-check
import { generateUniqueNumbersInRange } from '../lib/utils.js';

import PurchaseAmountValidationStrategy from '../validation/purchase-amount-validation.strategy.js';
import WinningNumbersValidationStrategy from '../validation/winning-numbers-validation.strategy.js';
import BonusNumberValidationStrategy from '../validation/bonus-number-validation.strategy.js';
import ValidationContext from '../validation/validation.context.js';

import LotteryMachineModel from './lottery-machine.model.js';
import LotteryModel from '../Lotto.js';

class LotteryMachineService {
  /** @type {LotteryMachineModel} */
  #lotteryMachineModel;

  /** @type {ValidationContext} */
  #lotteryMachineValidator;

  static STRATEGY = Object.freeze({
    DIVISOR: 1000,
    TICKET_LENGTH: 6,
    TICKET_RANGE: {
      START: 1,
      END: 45,
    },
  });

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

  /**
   *
   * @returns {number}
   */
  #calculateLotteryTicketCount() {
    return this.#lotteryMachineModel.getPurchaseAmount() / LotteryMachineService.STRATEGY.DIVISOR;
  }

  /**
   *
   * @returns {Array<number>}
   */
  #generateLotteryTicket() {
    return generateUniqueNumbersInRange(
      LotteryMachineService.STRATEGY.TICKET_RANGE.START,
      LotteryMachineService.STRATEGY.TICKET_RANGE.END,
      LotteryMachineService.STRATEGY.TICKET_LENGTH,
    );
  }

  /**
   *
   * @returns {boolean}
   */
  #isGeneratingLotteryTickets() {
    return (
      this.#lotteryMachineModel.getLotteryTickets().length !== this.#calculateLotteryTicketCount()
    );
  }

  /**
   *
   * @returns {{ lotteryTicketCounts: number; lotteryTickets: Array<number[]> }}
   */
  generateLotteryTickets() {
    while (this.#isGeneratingLotteryTickets()) {
      this.#lotteryMachineModel.setLotteryTicket(new LotteryModel(this.#generateLotteryTicket()));
    }

    return {
      lotteryTicketCounts: this.#lotteryMachineModel.getLotteryTicketCounts(),
      lotteryTickets: this.#lotteryMachineModel.getLotteryTicketNumbers(),
    };
  }
}

export default LotteryMachineService;
