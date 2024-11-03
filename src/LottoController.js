import { CHARS } from './constants/Values.js';
import inputView from './InputView.js';
import LottoStore from './LottoStore.js';
import outputView from './OutputView.js';
import validator from './utils/Validator.js';

class LottoController {
  #lottoStore;

  async run() {
    const amount = await this.tryReadAmount();
    this.printResult(amount);
    const winningNumber = await this.tryReadWinningNumber();
    const bonusNumber = await this.tryReadBonusNumber(winningNumber);
  }

  async tryReadAmount() {
    try {
      const amount = await this.readAmount();
      return amount;
    } catch (e) {
      outputView.printMessage(e.message);
      const amount = await this.tryReadAmount();
      return amount;
    }
  }

  async readAmount() {
    const amount = await inputView.readAmount();
    validator.validateAmount(amount);
    outputView.printBlank();
    return amount;
  }

  printResult(amount) {
    this.#lottoStore = new LottoStore(amount);
    const lottoNumbers = this.#lottoStore.getLottoNumbers();
    outputView.printPurchaseResult(lottoNumbers);
  }

  async tryReadWinningNumber() {
    try {
      const winningNumber = await this.readWinningNumber();
      return winningNumber;
    } catch (e) {
      outputView.printMessage(e.message);
      const winningNumber = await this.tryReadWinningNumber();
      return winningNumber;
    }
  }

  async readWinningNumber() {
    const winningNumbers = await inputView.readWinningNumber();
    const winningNumbersArray = winningNumbers.split(CHARS.numbersDelimiter);
    validator.validateLottoNumbers(winningNumbersArray);
    outputView.printBlank();
    return winningNumbersArray;
  }

  async tryReadBonusNumber(winningNumber) {
    try {
      const bonusNumber = await this.readBonusNumber(winningNumber);
      return bonusNumber;
    } catch (e) {
      outputView.printMessage(e.message);
      const bonusNumber = await this.tryReadBonusNumber(winningNumber);
      return bonusNumber;
    }
  }

  async readBonusNumber(winningNumber) {
    const bonusNumber = await inputView.readBonusNumber();
    const bonusNumberArray = bonusNumber.split(CHARS.numbersDelimiter);
    validator.validateBonusNumber(winningNumber, bonusNumberArray);
    outputView.printBlank();
    return bonusNumberArray;
  }
}

export default LottoController;
