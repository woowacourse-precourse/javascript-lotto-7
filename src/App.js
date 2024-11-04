import { MissionUtils } from '@woowacourse/mission-utils';
import { PROMPTS, INFO, PRIZE } from './constants.js';
import {
  validateUserMoney,
  validateLottoNumbers,
  validateBonusNumber,
} from './validation.js';
import Lotto from './Lotto.js';

class App {
  async run() {
    const userMoney = await this.getUserMoney();
    const countLotto = userMoney / 1000;
    const userLotto = [];
    const totalWinningLotto = {
      three: 0,
      four: 0,
      five: 0,
      fivebounus: 0,
      six: 0,
    };
    MissionUtils.Console.print(`\n${countLotto}${INFO.USER_BUY}`);
    for (let i = 0; i < countLotto; i++) {
      userLotto.push(
        new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6))
      );
      const showLottoNumber = userLotto[i].showNumber();
      MissionUtils.Console.print(`[${showLottoNumber.join(', ').trim()}]`);
    }
    const winningNumber = await this.getUserWinningNumber();
    const bonusNumber = await this.getBonusNumber(winningNumber);

    for (let i = 0; i < countLotto; i++) {
      const resultLotto = this.findWinningMatch(
        userLotto[i].showNumber(),
        winningNumber,
        bonusNumber
      );
      this.countWinningLotto(resultLotto, totalWinningLotto);
    }
    MissionUtils.Console.print(INFO.USER_WINNING_RESULT);
    MissionUtils.Console.print(INFO.userThreeMatch(totalWinningLotto.three));
    MissionUtils.Console.print(INFO.userFourMatch(totalWinningLotto.four));
    MissionUtils.Console.print(INFO.userFiveMatch(totalWinningLotto.five));
    MissionUtils.Console.print(
      INFO.userFiveBounusMatch(totalWinningLotto.fivebounus)
    );
    MissionUtils.Console.print(INFO.userSixMatch(totalWinningLotto.six));
    MissionUtils.Console.print(
      INFO.printTotalEarningsRate(
        this.calTotalEarningsRate(totalWinningLotto, userMoney)
      )
    );
  }

  async getUserMoney() {
    let validInput = false;
    let userMoney;
    while (!validInput) {
      try {
        const inputMoney = await MissionUtils.Console.readLineAsync(
          PROMPTS.INPUT_USER_MONEY
        );
        userMoney = validateUserMoney(inputMoney);

        validInput = true;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    return userMoney;
  }

  async getUserWinningNumber() {
    let validInput = false;
    let winningNumber;
    while (!validInput) {
      try {
        const userWinningNumber = await MissionUtils.Console.readLineAsync(
          PROMPTS.INPUT_USER_WINNING_NUMBER
        );
        winningNumber = userWinningNumber.split(',').map((num) => num.trim());
        winningNumber = validateLottoNumbers(winningNumber);
        validInput = true;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    return winningNumber;
  }

  async getBonusNumber(winningNumber) {
    let validInput = false;
    let userBonusNumber;
    while (!validInput) {
      try {
        const BonusNumber = await MissionUtils.Console.readLineAsync(
          PROMPTS.INPUT_USER_BONUS_NUMBER
        );
        userBonusNumber = validateBonusNumber(BonusNumber, winningNumber);
        validInput = true;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    return userBonusNumber;
  }

  findWinningMatch(userLotto, winningLotto, bonusNumber) {
    const userNumLotto = userLotto.map(Number);
    const winningNumLotto = winningLotto.map(Number);
    const resultLotto = winningNumLotto.filter((x) => userNumLotto.includes(x));
    if (resultLotto.length === 5) {
      return this.findBounusMatch(userNumLotto, bonusNumber, resultLotto);
    }
    return resultLotto.length;
  }

  findBounusMatch(userNumLotto, bonusNumber, resultLotto) {
    if (userNumLotto.includes(Number(bonusNumber))) {
      return 'bonus';
    }
    return resultLotto.length;
  }

  countWinningLotto(resultLotto, totalWinningLotto) {
    switch (resultLotto) {
      case 3:
        totalWinningLotto.three = totalWinningLotto.three + 1;
        break;
      case 4:
        totalWinningLotto.four = totalWinningLotto.four + 1;
        break;
      case 5:
        totalWinningLotto.five = totalWinningLotto.five + 1;
        break;
      case 'bonus':
        totalWinningLotto.fivebounus = totalWinningLotto.fivebounus + 1;
        break;
      case 6:
        totalWinningLotto.six = totalWinningLotto.six + 1;
        break;
    }
    return totalWinningLotto;
  }

  calTotalEarningsRate(totalWinningLotto, userMoney) {
    const totalreturn =
      totalWinningLotto.three * PRIZE.THREE_MATCH +
      totalWinningLotto.four * PRIZE.FOUR_MATCH +
      totalWinningLotto.five * PRIZE.FIVE_MATCH +
      totalWinningLotto.fivebounus * PRIZE.FIVE_BONUS_MATCH +
      totalWinningLotto.six * PRIZE.SIX_MATCH;
    return ((totalreturn / userMoney) * 100).toFixed(1);
  }
}

export default App;
