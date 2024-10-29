import { Console } from '@woowacourse/mission-utils';
import { IO_MESSAGE, LOTTERY } from './constant';
import { validateBonusNumber, validateUserMoney, validateWinningNumbers } from './inputValidation';

class App {
  #userMoney;
  #winningNumbers;
  #bonusNumber;

  async run() {
    await this.setUserInputs();
  }

  async setUserInputs() {
    try {
      await this.setUserMoney();
      await this.setWinningNumbers();
      await this.setBonusNumber();
    } catch (error) {
      // 에러 발생 시 메시지만 출력하고 입력 계속 받아야 함
      Console.print(error.message);
      await this.setUserInputs();
    }
  }

  async setUserMoney() {
    if (this.#userMoney) return;
    const userMoney = await Console.readLineAsync(IO_MESSAGE.INPUT_USER_MONEY);
    validateUserMoney(userMoney);
    this.#userMoney = Number(userMoney);
  }

  getUserMoney() {
    return this.#userMoney;
  }

  async setWinningNumbers() {
    if (this.#winningNumbers) return;
    const winningNumbers = await Console.readLineAsync(IO_MESSAGE.INPUT_WINNING_NUMBER);
    validateWinningNumbers(winningNumbers);
    this.#winningNumbers = winningNumbers.split(LOTTERY.WINNING_NUMBER_SPLITTER)
      .map((winningNumber) => Number(winningNumber));
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  async setBonusNumber() {
    if (this.#bonusNumber) return;
    const bonusNumber = await Console.readLineAsync(IO_MESSAGE.INPUT_BONUS_NUMBER);
    validateBonusNumber(this.#winningNumbers, bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default App;
