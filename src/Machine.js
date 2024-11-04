import { Console, Random } from "@woowacourse/mission-utils";
import { moneyValidation, winNumbersValidation, bonusNumberValidation } from "./validation.js";
import { USER_MESSAGE, LOTTO_PRICE, PERCENT_FACTOR, RESULT_COMMENTS, RESULT_MONEY } from "./constants.js";
import Lotto from "./Lotto.js";

class Machine {
  #money;
  #lottoList;
  #winNumbers;
  #bonusNumber;
  #lottoResults;
  #totalMoney;

  constructor() {
    this.#money = 0;
    this.#lottoList = [];
    this.#winNumbers = [];
    this.#bonusNumber = 0;
    this.#lottoResults = [
      [RESULT_COMMENTS.FIRST, RESULT_MONEY.FIRST, 0],
      [RESULT_COMMENTS.SECOND, RESULT_MONEY.SECOND, 0],
      [RESULT_COMMENTS.THIRD, RESULT_MONEY.THIRD, 0],
      [RESULT_COMMENTS.FOURTH, RESULT_MONEY.FOURTH, 0],
      [RESULT_COMMENTS.FIFTH, RESULT_MONEY.FIFTH, 0],
    ];
    this.#totalMoney = 0;
  }

  async play() {
    await this.readUserMoney();
    await this.readUserWinNumbers();
    await this.readUserBonusNumber();
    this.lottoWinningCheck();
    this.printBeforeResult();
    this.calculatorMoney();
    this.printProfit();
  }

  async readUserMoney() {
    const moneyString =
      await Console.readLineAsync(USER_MESSAGE.MONEY_INPUT);
    this.#money = moneyValidation(moneyString);

    this.#printBuyCount();
  }

  #printBuyCount() {
    const buyCount = parseInt(this.#money, 10) / LOTTO_PRICE;
    Console.print(`\n${buyCount}개를 구매했습니다.`);

    this.#createLotto(buyCount);
  }

  #createLotto(buyCount) {
    this.#lottoList = Array.from({ length: buyCount }, () => {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b,
      );

      return new Lotto(randomNumbers);
    });
  }

  async readUserWinNumbers() {
    const winNumbersString = await Console.readLineAsync(USER_MESSAGE.WIN_NUMBERS_INPUT);
    this.#winNumbers = winNumbersValidation(winNumbersString);
  }

  async readUserBonusNumber() {
    const bonusNumberString = await Console.readLineAsync(USER_MESSAGE.BONUS_NUMBER_INPUT);
    this.#bonusNumber = bonusNumberValidation(bonusNumberString);
  }

  lottoWinningCheck() {
    this.#lottoList.forEach((lotto) => {
      const rank = lotto.matchRank(this.#winNumbers, this.#bonusNumber);
      if (rank) this.#lottoResults[rank - 1][2] += 1;
    });
  }

  calculatorMoney() {
    this.#totalMoney = this.#lottoResults.reverse().reduce((acc, cur) => {
      const [rankComment,winMoney,winCount] = cur;
      this.#printWinningResult(rankComment,winMoney,winCount);
      const addMoney = acc + winMoney * winCount;

      return addMoney;
    }, 0);
  }

  printBeforeResult() {
    Console.print(USER_MESSAGE.BEFORE_RESULT);
  }

  #printWinningResult(rankComment,winMoney,winCount) {
    Console.print(`${rankComment} (${winMoney.toLocaleString()}원) - ${winCount}개`);
  }

  printProfit() {
    const profitRate = (this.#totalMoney / parseInt(this.#money, 10)) * PERCENT_FACTOR;
    Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }
}

export default Machine;
