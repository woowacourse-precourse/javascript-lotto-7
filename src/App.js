import { Console } from '@woowacourse/mission-utils';
import { IO_MESSAGE, LOTTERY } from './constant';
import { validateBonusNumber, validateUserMoney, validateWinningNumbers } from './inputValidation';
import Lotto from './Lotto';

class App {
  #userMoney;
  #winningNumbers;
  #bonusNumber;
  #userLotteries = [];
  #prizeCount = [0, 0, 0, 0, 0, 0];
  #winningMoneySum;

  async run() {
    await this.setUserMoney();
    this.setUserLotteries(this.publishUserLotteries());
    this.printUserLotteries();
    await this.setWinningNumbers();
    await this.setBonusNumber();
    this.drawUserLotteries();
    this.printLotteryReport();
  }

  async setUserMoney() {
    if (this.#userMoney) return;
    try {
      const userMoney = await Console.readLineAsync(IO_MESSAGE.INPUT_USER_MONEY);
      validateUserMoney(userMoney);
      this.#userMoney = Number(userMoney);
    } catch (error) {
      // 에러 발생 시 메시지만 출력하고 입력 계속 받아야 함
      Console.print(error.message);
      await this.setUserMoney();
    }
  }

  getUserMoney() {
    return this.#userMoney;
  }

  async setWinningNumbers() {
    if (this.#winningNumbers) return;
    try {
      const winningNumbers = await Console.readLineAsync(IO_MESSAGE.INPUT_WINNING_NUMBER);
      validateWinningNumbers(winningNumbers);
      this.#winningNumbers = winningNumbers.split(LOTTERY.WINNING_NUMBER_SPLITTER)
        .map((winningNumber) => Number(winningNumber));
    } catch (error) {
      // 에러 발생 시 메시지만 출력하고 입력 계속 받아야 함
      Console.print(error.message);
      await this.setWinningNumbers();
    }
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  async setBonusNumber() {
    if (this.#bonusNumber) return;
    try {
      const bonusNumber = await Console.readLineAsync(IO_MESSAGE.INPUT_BONUS_NUMBER);
      validateBonusNumber(this.#winningNumbers, bonusNumber);
      this.#bonusNumber = Number(bonusNumber);
    } catch (error) {
      // 에러 발생 시 메시지만 출력하고 입력 계속 받아야 함
      Console.print(error.message);
      await this.setBonusNumber();
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setUserLotteries(lotteries) {
    this.#userLotteries = lotteries;
  }

  setPrizeCount(numbers) {
    this.#prizeCount = numbers;
  }

  getPrizeCount() {
    return this.#prizeCount;
  }

  setWinningMoneySum(number) {
    this.#winningMoneySum = number;
  }

  getWinningMoneySum() {
    return this.#winningMoneySum;
  }

  publishUserLotteries() {
    const publishCount = this.#userMoney / LOTTERY.PRICE;
    const userLotteries = [...this.#userLotteries];
    for (let i = 0; i < publishCount; i += 1) {
      userLotteries.push(new Lotto(Lotto.getRandomUniqueLotteryNumbers()));
    }
    return userLotteries;
  }

  printUserLotteries() {
    Console.print(`${this.#userLotteries.length}개를 구매했습니다.`);
    this.#userLotteries.forEach((lottery) => {
      Console.print(lottery.toString());
    });
  }

  drawUserLotteries() {
    const prizeCountCopy = [...this.#prizeCount];
    const sum = this.#userLotteries.map((lottery) => {
      const { prize, money } = lottery.getLottoResult(this.#winningNumbers, this.#bonusNumber);
      prizeCountCopy[prize] += 1;
      return money;
    }).reduce((acc, cur) => acc + cur, 0);
    this.setWinningMoneySum(sum);
    this.setPrizeCount(prizeCountCopy);
  }

  getProfit() {
    return ((this.#winningMoneySum / this.#userMoney) * 100).toFixed(1);
  }

  printLotteryReport() {
    Console.print(IO_MESSAGE.OUTPUT_LOTTERY_REPORT_ANNOUNCE);
    const prizeSize = this.#prizeCount.length;
    for (let i = prizeSize - 1; i > 0; i -= 1) {
      Console.print(`${IO_MESSAGE.OUTPUT_LOTTERY_REPORT_PRIZE[i - 1] + this.#prizeCount[i]}개`);
    }
    Console.print(`총 수익률은 ${this.getProfit()}%입니다.`);
  }
}

export default App;
