import { Console } from '@woowacourse/mission-utils';

class Input {
  static #PURCHASE_AMOUNT_INPUT_MESSAGE = '구입 금액을 입력해 주세요.';
  static #WINNING_NUMBER_INPUT_MESSAGE = '당첨 번호를 입력해 주세요.';
  static #BONUS_NUMBER_INPUT_MESSAGE = '보너스 번호를 입력해 주세요.';

  static async readLine(message) {
    const input = await Console.readLineAsync(`${message}\n`);
    return input;
  }

  static async readPurchaseAmount() {
    const purchaseAmount = await this.readLine(
      this.#PURCHASE_AMOUNT_INPUT_MESSAGE,
    );
    return purchaseAmount;
  }

  static async readWinningNumber() {
    const winningNumber = await this.readLine(
      this.#WINNING_NUMBER_INPUT_MESSAGE,
    );
    return winningNumber;
  }

  static async readBonusNumber() {
    const bonusNumber = await this.readLine(this.#BONUS_NUMBER_INPUT_MESSAGE);
    return bonusNumber;
  }
}

export default Input;
