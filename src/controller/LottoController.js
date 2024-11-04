import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Validator from './Validator.js';
import LottoTickets from '../model/LottoTickets.js';
import WinningNumbers from '../model/WinningNumbers.js';
import LottoGame from '../model/LottoGame.js';
import { parseNumbers } from '../utils/Parser.js';

class LottoController {
  static #DIVISION_UNIT = 1000;

  async init() {
    const purchaseAmount = await this.#getPurchaseAmount();
    const lottoCount = purchaseAmount / LottoController.#DIVISION_UNIT;

    const lottoTickets = new LottoTickets(lottoCount).getTickets();
    OutputView.printPurchaseAmount(purchaseAmount);
    OutputView.printLottoTicket(lottoTickets);

    const winningNumbers = await this.#getWinningNumbers();
    const lottoGame = new LottoGame(
      lottoTickets,
      winningNumbers.numbers,
      winningNumbers.bonusNumber,
      purchaseAmount
    );

    const gameResult = lottoGame.calculateResult();
    OutputView.printLottoResult(gameResult);
    OutputView.printProfitRate(lottoGame.calculateProfitRate());
  }

  async #getPurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    Validator.checkPurchaseAmount(purchaseAmount);
    return Number(purchaseAmount);
  }

  async #getWinningNumbers() {
    const winningNumbersInput = await InputView.readWinningNumbers();
    const bonusNumberInput = await InputView.readBonusNumber();

    const winningNumbers = new WinningNumbers(
      parseNumbers(winningNumbersInput),
      Number(bonusNumberInput)
    );
    return {
      numbers: winningNumbers.getWinningNumbers(),
      bonusNumber: winningNumbers.getBonusNumber(),
    };
  }
}

export default LottoController;
