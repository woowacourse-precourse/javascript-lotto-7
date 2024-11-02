// @ts-check
class LotteryMachineModel {
  /** @type {number} */
  #purchaseAmount;

  /**
   *
   * @param {number} purchaseAmount
   */
  setPurchaseAmount(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
  }
}

export default LotteryMachineModel;
