import Draw from "../model/Draw.js";
import InputUtils from "../utils/InputUtils.js";

class LottoDrawController {
  #inputView;
  #outputView;
  #lottoWinningNumbers;
  #draw;

  constructor(inputView, outputView) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async startDrawLotto() {
    this.#lottoWinningNumbers = await this.#getLottoWinningNumber();
    const lottoBonusNumber = await this.#getLottoBonusNumber();
    this.#draw = new Draw(this.#lottoWinningNumbers, lottoBonusNumber);
  }

  async #getLottoWinningNumber() {
    const winningNumber = await InputUtils.validInput(
      () => this.#inputView.inputLottoWinningNumber(),
      InputUtils.validateWinningNumber,
      this.#outputView
    );

    return winningNumber;
  }

  async #getLottoBonusNumber() {
    const bonusNumber = await InputUtils.validInput(
      () => this.#inputView.inputLottoBonuseNumber(),
      (input) =>
        InputUtils.validateBonusNumber(input, this.#lottoWinningNumbers),
      this.#outputView
    );
    return bonusNumber;
  }

  getWinningNumbers() {
    return this.#draw.getWinningNumber();
  }

  getBonusNumber() {
    return this.#draw.getBonusNumber();
  }
}

export default LottoDrawController;
