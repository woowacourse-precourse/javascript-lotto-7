import Lotto from '../models/Lotto.js';

class InputHandler {
  #inputView;
  #outputView;
  #validationLotto;

  constructor(inputView, outputView, validationLotto) {
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#validationLotto = validationLotto;
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

  async getPurchasePrice() {
    return await this.handleInput(
      '구입금액을 입력해 주세요.\n',
      this.#validationLotto.purchasePrice
    );
  }

  async getWinningLotto() {
    return await this.handleInput(
      '당첨 번호를 입력해 주세요.\n',
      this.#validationLotto.winningNumbers,
      (input) => new Lotto(input.split(',').map(Number))
    );
  }

  async getBonusNumber(winningLotto) {
    return await this.handleInput(
      '보너스 번호를 입력해 주세요.\n',
      (bonusNumber) =>
        this.#validationLotto.bonusNumber(bonusNumber, winningLotto)
    );
  }
}

export default InputHandler;
