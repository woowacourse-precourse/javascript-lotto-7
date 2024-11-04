class LottoController {
  #purchaseController;
  #winningNumberController;
  #resultController;

  constructor(purchaseController, winningNumberController, resultController) {
    this.#purchaseController = purchaseController;
    this.#winningNumberController = winningNumberController;
    this.#resultController = resultController;
  }

  async execute() {
    const purchaseHistory = await this.#purchaseController.purchaseLotto();
    const { winningNumbers, bonusNumber } = await this.#winningNumberController.getWinningInfo();
    await this.#resultController.showLottoResult(purchaseHistory, winningNumbers, bonusNumber);
  }
}

export default LottoController;
