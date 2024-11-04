import { CHARS } from './constants/Values.js';
import inputView from './InputView.js';
import LottoStore from './LottoStore.js';
import outputView from './OutputView.js';
import validator from './utils/Validator.js';

class LottoController {
  #lottoStore;

  async run() {
    const amount = await this.tryAndCatchRead(this.readAmount);
    this.printPurchaseResult(amount);
    const winningNumber = await this.tryAndCatchRead(this.readWinningNumber);
    const bonusNumber = await this.tryAndCatchRead(() => this.readBonusNumber(winningNumber));
    this.handleDraw(winningNumber, bonusNumber);
  }

  async readAmount() {
    const amount = await inputView.readAmount();
    validator.validateAmount(amount);
    outputView.printBlank();
    return amount;
  }

  printPurchaseResult(amount) {
    this.#lottoStore = new LottoStore(amount);
    const lottoNumbers = this.#lottoStore.getLottoNumbers();
    outputView.printPurchaseResult(lottoNumbers);
  }

  async readWinningNumber() {
    const winningNumbers = await inputView.readWinningNumber();
    validator.validateLottoNumbersString(winningNumbers);
    const winningNumbersArray = winningNumbers.split(CHARS.inputNumbersDelimiter).map(Number);
    validator.validateLottoNumbers(winningNumbersArray);
    outputView.printBlank();
    return winningNumbersArray;
  }

  async readBonusNumber(winningNumber) {
    const bonusNumber = await inputView.readBonusNumber();
    validator.validateBonusNumberString(bonusNumber);
    const bonusNumberArray = bonusNumber.split(CHARS.inputNumbersDelimiter).map(Number);
    validator.validateBonusNumber(winningNumber, bonusNumberArray);
    outputView.printBlank();
    return bonusNumberArray;
  }

  async tryAndCatchRead(readFunction) {
    try {
      const answer = await readFunction();
      return answer;
    } catch (e) {
      outputView.printMessage(e.message);
      const answer = await this.tryAndCatchRead(readFunction);
      return answer;
    }
  }

  handleDraw(winningNumber, bonusNumber) {
    const result = Object.entries(this.#lottoStore.getLottoResult(winningNumber, bonusNumber));
    outputView.printDrawResult(result);
    const earningRate = this.#lottoStore.getEarningRate();
    outputView.printEarningRate(earningRate);
  }
}

export default LottoController;
