import LotteryModel from '../Lotto.js';

// @ts-check
class LotteryMachineModel {
  /** @type {number} */
  #purchaseAmount;

  /** @type {Array<number>} */
  #winningNumbers;

  /** @type {number} */
  #bonusNumber;

  /** @type {Array<LotteryModel>} */
  #lotteryTickets = [];

  /**
   *
   * @returns {number}
   */
  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  /**
   *
   * @param {number} purchaseAmount
   */
  setPurchaseAmount(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
  }

  /**
   *
   * @returns {Array<number>}
   */
  getWinningNumbers() {
    return this.#winningNumbers;
  }

  /**
   *
   * @param {Array<number>} winningNumbers
   */
  setWinningNumbers(winningNumbers) {
    this.#winningNumbers = winningNumbers;
  }

  /**
   *
   * @returns {number}
   */
  getBonusNumber() {
    return this.#bonusNumber;
  }

  /**
   *
   * @param {number} bonusNumber
   */
  setBonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }

  /**
   *
   * @returns {Array<LotteryModel>}
   */
  getLotteryTickets() {
    return this.#lotteryTickets;
  }

  /**
   *
   * @returns {number}
   */
  getLotteryTicketCounts() {
    return this.#lotteryTickets.length;
  }

  /**
   *
   * @returns {Array<number[]>}
   */
  getLotteryTicketNumbers() {
    return this.#lotteryTickets.map((lotteryTicket) => lotteryTicket.getLotteryNumbers());
  }

  /**
   *
   * @param {LotteryModel} lotteryTicket
   */
  setLotteryTicket(lotteryTicket) {
    this.#lotteryTickets.push(lotteryTicket);
  }
}

export default LotteryMachineModel;
