import asyncFunctionErrorHandler from '../utils/asyncFunctionErrorHandler.js';
import BounsNumber from '../models/BonusNumber.js';
import Lotto from '../models/Lotto.js';
import Money from '../models/Money.js';
import WinningStatics from '../models/WinningStatics.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import INPUT_MESSAGES from '../constants/messages/inputMessages.js';

class LottoController {
  #lottoCount;
  #lottos;
  #winningNumbers;
  #bonusNumber;

  async run() {
    await asyncFunctionErrorHandler(this.getLottoCount, this);
    this.printLottos();
    await asyncFunctionErrorHandler(this.getWinningNumbers, this);
    await asyncFunctionErrorHandler(this.getBonusNumber, this);
    this.printWinningStatincs();
  }

  async getLottoCount() {
    const moneyInput = await InputView.readLineAsync(INPUT_MESSAGES.INPUT_MONEY);
    this.#lottoCount = new Money(moneyInput).calculateLottoCount();
    OutputView.printNewLine();
    OutputView.printLottoCount(this.#lottoCount);
  }

  printLottos() {
    this.#lottos = Lotto.getPurchaesdLotto(this.#lottoCount);
    this.#lottos.forEach((lotto) => OutputView.printMessage(lotto.convertNumbersToString()));
    OutputView.printNewLine();
  }

  async getWinningNumbers() {
    const winningNumbersInput = await InputView.readLineAsync(INPUT_MESSAGES.INPUT_WINNINGNUMBERS);
    this.#winningNumbers = Lotto.convertInputToNumbers(winningNumbersInput);
    OutputView.printNewLine();
  }

  async getBonusNumber() {
    const bonusNumberInput = await InputView.readLineAsync(INPUT_MESSAGES.INPUT_BONUSNUMBER);
    this.#bonusNumber = new BounsNumber(this.#winningNumbers, bonusNumberInput).bonusNumber;
    OutputView.printNewLine();
  }

  printWinningStatincs() {
    OutputView.printWinningStaticsTitle();
    OutputView.printWinningStaticsDivideLine();
    const winningStatics = new WinningStatics(this.#winningNumbers, this.#bonusNumber);
    winningStatics.updateStatics(this.#lottos);
    const rankStatics = winningStatics.getRankStatics();
    OutputView.printRankStatics(rankStatics);
    const rateOfReturn = winningStatics.calculateRateOfReturn(this.#lottoCount);
    OutputView.printRateOfReturn(rateOfReturn);
  }
}

export default LottoController;
