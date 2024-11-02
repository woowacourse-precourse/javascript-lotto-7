// @ts-check
class LotteryMachineModel {
  /** @type {number} */
  #purchaseAmount;

  /** @type {Array<number>} */
  #winningNumbers;

  /**
   *
   * @param {number} purchaseAmount
   */
  setPurchaseAmount(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
  }

  /**
   *
   * @param {Array<number>} winningNumbers
   */
  setWinningNumbers(winningNumbers) {
    this.#winningNumbers = winningNumbers;
  }
}

export default LotteryMachineModel;
