import { Console } from '@woowacourse/mission-utils';
import { ERROR_MSG, REGEXP } from '../constants/constants.js';

const DELIMETER = ',';

const INPUT_MSG = {
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNum: '\n당첨 번호를 입력해 주세요.\n',
  bonusNum: '\n보너스 번호를 입력해 주세요.\n',
};

class InputView {
  async requestPurchaseAmount() {
    const userInputString = await this.#getUserInput(INPUT_MSG.purchaseAmount);
    return this.stringToInt(userInputString);
  }

  async requestWinningNum() {
    const userInputString = await this.#getUserInput(INPUT_MSG.winningNum);
    return this.splitStringToInt(userInputString);
  }

  async requestBonusNum() {
    const userInputString = await this.#getUserInput(INPUT_MSG.bonusNum);
    return this.splitStringToInt(userInputString);
  }

  splitStringToInt(string) {
    const splitedString = string.split(DELIMETER);
    const numbers = [];

    splitedString.forEach((element) => {
      numbers.push(this.stringToInt(element));
    });

    return numbers;
  }

  stringToInt(string) {
    this.#validateNumber(string);
    return parseInt(string, 10);
  }

  async #getUserInput(inputMessage) {
    const userInput = await Console.readLineAsync(inputMessage);
    this.#validateEmpty(userInput);
    return userInput;
  }

  #validateNumber(string) {
    if (REGEXP.isNumber.test(string) === false) {
      throw Error(ERROR_MSG.notANumber);
    }
  }

  #validateEmpty(string) {
    if (!string || string.trim().length === 0) {
      throw Error(ERROR_MSG.invalidInputData);
    }
  }
}

export default InputView;
