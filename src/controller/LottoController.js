import Validator from './Validator.js';
import WinningNumbers from '../model/WinningNumbers.js';
import InputView from '../view/InputView.js';
import { generateRandomNumbers } from '../utils/RandomNumberGenerator.js';
import Lotto from '../model/Lotto.js';
import OutputView from '../view/OutputView.js';

class LottoController {
  static #DIVISION_UNIT = 1000;

  constructor() {}

  async init() {
    const purchaseAmount = await LottoController.getPurchaseAmount();
    this.lottoCount = purchaseAmount / LottoController.#DIVISION_UNIT;
    this.lottoTickets = LottoController.generateLottoTickets(this.lottoCount);

    const winningNumbersInput = await InputView.readWinningNumbers();
    const bonusNumberInput = await InputView.readBonusNumber();
    const lottoWinningNumbers = new WinningNumbers(
      winningNumbersInput,
      bonusNumberInput
    );
    this.winningNumbers = lottoWinningNumbers.getWinningNumbers();
    this.bonusNumber = lottoWinningNumbers.getBonusNumber();
    LottoController.printLottoTickets(purchaseAmount, this.lottoTickets);
  }

  static async getPurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    Validator.checkPurchaseAmount(purchaseAmount);

    return purchaseAmount;
  }

  static generateLottoTickets(lottoCounts) {
    const lottoTickets = [];
    for (let i = 0; i < lottoCounts; i++) {
      const lottoTicket = generateRandomNumbers();
      lottoTickets.push(lottoTicket);
    }
    lottoTickets.forEach((lottoTicket) => {
      // Validator.checkWinningNumbers(lottoTicket);
    });

    if (lottoTickets.length !== lottoCounts) {
      throw new Error('[ERROR]');
    }
    return lottoTickets;
  }

  static printLottoTickets(money, lottos) {
    OutputView.printPurchaseAmount(money);
    lottos.forEach((lotto) => {
      OutputView.printLottoTicket(lotto);
    });
  }
}

export default LottoController;
