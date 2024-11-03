// @ts-check
import LotteryMachineView from './lottery-machine.view.js';
import LotteryMachineService from './lottery-machine.service.js';

class LotteryMachineController {
  /** @type {LotteryMachineView} */
  #lotteryMachineView;

  /** @type {LotteryMachineService} */
  #lotteryMachineService;

  constructor({ views, services }) {
    const { LotteryMachineView: lotteryMachineView } = views;
    const { LotteryMachineService: lotteryMachineService } = services;

    this.#lotteryMachineView = lotteryMachineView;
    this.#lotteryMachineService = lotteryMachineService;
  }

  /**
   *
   * @param {() => Promise<void>} input
   * @param {() => Promise<void>} onError
   */
  async #safeInput(input, onError) {
    try {
      await input();
    } catch (error) {
      this.#lotteryMachineView.printErrorMessage(error.message);
      await onError();
    }
  }

  async #inputPurchaseAmount() {
    await this.#safeInput(
      async () => {
        const purchaseAmount = await this.#lotteryMachineView.getLotteryPurchaseAmount();
        this.#lotteryMachineService.inputPurchaseAmount(purchaseAmount);
      },
      async () => {
        await this.#inputPurchaseAmount();
      },
    );

    this.#lotteryMachineView.printLineBreak();
  }

  async #inputWinningNumbers() {
    await this.#safeInput(
      async () => {
        const winningNumbers = await this.#lotteryMachineView.getLotteryWinningNumbers();
        this.#lotteryMachineService.inputWinningNumbers(winningNumbers);
      },
      async () => {
        await this.#lotteryMachineView.getLotteryWinningNumbers();
      },
    );

    this.#lotteryMachineView.printLineBreak();
  }

  async #inputBonusNumbers() {
    await this.#safeInput(
      async () => {
        const bonusNumber = await this.#lotteryMachineView.getLotteryBonusNumber();
        this.#lotteryMachineService.inputBonusNumber(bonusNumber);
      },
      async () => {
        await this.#lotteryMachineView.getLotteryBonusNumber();
      },
    );

    this.#lotteryMachineView.printLineBreak();
  }

  #generateLotteryTickets() {
    const { lotteryTicketCounts, lotteryTickets } =
      this.#lotteryMachineService.generateLotteryTickets();

    this.#lotteryMachineView.printPurchaseLotteryTicketInfo(lotteryTicketCounts, lotteryTickets);
    this.#lotteryMachineView.printLineBreak();
  }

  #generateWinningStatistics() {
    const { winningStatistics, winningAmount } =
      this.#lotteryMachineService.generateWinningStatistics();

    this.#lotteryMachineView.printWinningStatistics(winningStatistics, winningAmount);

    const totalReturnRate = this.#lotteryMachineService.calculateTotalReturnRate(
      winningStatistics,
      winningAmount,
    );

    this.#lotteryMachineView.printTotalReturnRate(totalReturnRate);
  }

  async init() {
    await this.#inputPurchaseAmount();

    this.#generateLotteryTickets();

    await this.#inputWinningNumbers();

    await this.#inputBonusNumbers();

    this.#generateWinningStatistics();
  }
}

export default LotteryMachineController;
