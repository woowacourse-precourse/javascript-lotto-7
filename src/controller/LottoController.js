import Validator from './Validator.js';
import WinningNumbers from '../model/WinningNumbers.js';
import InputView from '../view/InputView.js';
import { generateRandomNumbers } from '../utils/RandomNumberGenerator.js';
import OutputView from '../view/OutputView.js';
import LottoGame from '../model/LottoGame.js';

class LottoController {
  static #DIVISION_UNIT = 1000;

  constructor() {}

  async init() {
    this.purchaseAmount = await LottoController.getPurchaseAmount();
    this.lottoCount = this.purchaseAmount / LottoController.#DIVISION_UNIT;
    this.lottoTickets = LottoController.generateLottoTickets(this.lottoCount);

    const winningNumbersInput = await InputView.readWinningNumbers();
    const bonusNumberInput = await InputView.readBonusNumber();
    const lottoWinningNumbers = new WinningNumbers(
      winningNumbersInput,
      bonusNumberInput
    );
    this.winningNumbers = lottoWinningNumbers.getWinningNumbers();
    this.bonusNumber = lottoWinningNumbers.getBonusNumber();
    LottoController.printLottoTickets(this.purchaseAmount, this.lottoTickets);

    const lottoGame = new LottoGame(
      this.lottoTickets,
      this.winningNumbers,
      this.bonusNumber,
      this.purchaseAmount
    );
    OutputView.printLottoResult(lottoGame.result);
    OutputView.printProfitRate(lottoGame.calculateProfitRate());
  }

  static async getPurchaseAmount() {
    const money = await InputView.readPurchaseAmount();
    Validator.checkPurchaseAmount(money);

    return money;
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
