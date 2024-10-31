import { Console } from '@woowacourse/mission-utils';
import { ERROR_MSG } from '../../Util/Constants.js';

const INPUT_MSG = {
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNum: '당첨 번호를 입력해 주세요.\n',
  bonusNum: '보너스 번호를 입력해 주세요.\n',
};

class InputView {
  async readPuchaseAmount() {
    return await this.#getUserInput(INPUT_MSG.purchaseAmount);
  }

  getwinningNum = async () => this.#getUserInput(INPUT_MSG.winningNum);

  getbonusNum = async () => this.#getUserInput(INPUT_MSG.bonusNum);

  async #getUserInput(inputMessage) {
    const userInput = await Console.readLineAsync(inputMessage);
    this.#validate(userInput);
    return userInput;
  }

  #validate(userInput) {
    if (!userInput || userInput.trim().length === 0) {
      throw Error(ERROR_MSG.invalidInputData);
    }
  }
}

export default InputView;
