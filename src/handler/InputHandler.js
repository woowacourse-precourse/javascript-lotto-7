import InputView from '../view/InputView.js';
import {
  validateBonusNumber,
  validatePurchasePrice,
  validateWinningNumbers,
} from '../validation/validation.js';
import Lotto from '../models/Lotto.js';

class InputHandler {
  #inputView;
  #outputView;

  constructor(outputView) {
    this.#inputView = new InputView();
    this.#outputView = outputView;
  }

  async handleInput(message, validator, parser = Number) {
    while (true) {
      try {
        const input = await this.#inputView.promptUserInput(message);
        validator(input);

        return parser(input);
      } catch (error) {
        this.#outputView.displayErrorMessage(error.message);
      }
    }
  }

  async parseValidatePurchasePriceInput() {
    return await this.handleInput(
      '구입금액을 입력해 주세요.\n',
      validatePurchasePrice
    );
  }

  async parseValidateWinningLottoInput() {
    return await this.handleInput(
      '당첨 번호를 입력해 주세요.\n',
      validateWinningNumbers,
      (input) => new Lotto(input.split(',').map(Number))
    );
  }

  async parseValidateBonusNumberInput(winningLotto) {
    return await this.handleInput(
      '보너스 번호를 입력해 주세요.\n',
      (bonusNumber) => validateBonusNumber(bonusNumber, winningLotto)
    );
  }
}

export default InputHandler;
