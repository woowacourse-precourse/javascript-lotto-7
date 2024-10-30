import { Console } from '@woowacourse/mission-utils';
import { IO_MESSAGE, LOTTERY } from './constant';
import { validateBonusNumber, validateUserMoney, validateWinningNumbers } from './inputValidation';
import Lotto from './Lotto';

class App {
  #userMoney;
  #winningNumbers;
  #bonusNumber;
  #userLotteries = [];

  async run() {
    await this.setUserInputs();
    this.setUserLotteries(this.publishUserLotteries());
    this.printUserLotteries();
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

  publishUserLotteries() {
    const publishCount = this.#userMoney / LOTTERY.PRICE;
    const userLotteries = [...this.#userLotteries];
    for (let i = 0; i < publishCount; i += 1) {
      userLotteries.push(new Lotto(Lotto.getRandomUniqueLotteryNumbers()));
    }
    return userLotteries;
  }

  setUserLotteries(lotteries) {
    this.#userLotteries = lotteries;
  }

  printUserLotteries() {
    Console.print(`${this.#userLotteries.length}개를 구매했습니다.`);
    this.#userLotteries.forEach((lottery) => {
      Console.print(lottery.toString());
    });
  }
}

export default App;
