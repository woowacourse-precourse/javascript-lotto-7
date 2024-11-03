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

        this.#lotteryMachineView.printLineBreak();
      },
      async () => {
        await this.#inputPurchaseAmount();
      },
    );
  }

  async #inputWinningNumbers() {
    await this.#safeInput(
      async () => {
        const winningNumbers = await this.#lotteryMachineView.getLotteryWinningNumbers();
        this.#lotteryMachineService.inputWinningNumbers(winningNumbers);

        this.#lotteryMachineView.printLineBreak();
      },
      async () => {
        await this.#inputWinningNumbers();
      },
    );
  }

  async #inputBonusNumbers() {
    await this.#safeInput(
      async () => {
        const bonusNumber = await this.#lotteryMachineView.getLotteryBonusNumber();
        this.#lotteryMachineService.inputBonusNumber(bonusNumber);

        this.#lotteryMachineView.printLineBreak();
      },
      async () => {
        await this.#inputBonusNumbers();
      },
    );
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
