import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { moneyValidation, lottoNumbersValidation, bonusNumberValidation } from "./validation.js";

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
      ['6개 일치', 2000000000, 0],
      ['5개 일치, 보너스 볼 일치', 30000000, 0],
      ['5개 일치', 1500000, 0],
      ['4개 일치', 50000, 0],
      ['3개 일치', 5000, 0],
    ];
    this.#totalMoney = 0;
  }

  async play() {
    await this.readUserMoney();
    await this.readUserWinNumbers();
    await this.readUserBonusNumber();
    Console.print('\n당첨 통계\n---');
    this.lottoWinningCheck();
    this.calculatorMoney();
    this.printProfit();
  }

  async readUserMoney() {
    const money =
      await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    moneyValidation(money);
    this.#money = parseInt(money, 10);

    this.#printBuyCount();
  }

  #printBuyCount() {
    const buyCount = parseInt(this.#money, 10) / 1000;
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
    const winNumbersString = await Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n',
    );
    const winNumbers = winNumbersString.split(',').map((number) => parseInt(number, 10));
    lottoNumbersValidation(winNumbers);
    this.#winNumbers = winNumbers;
  }

  async readUserBonusNumber() {
    const bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    bonusNumberValidation(bonusNumber);
    this.#bonusNumber = parseInt(bonusNumber, 10);
  }

  lottoWinningCheck() {
    const RANK_TABLE = {
      6: 1,
      5: [2, 3],
      4: 4,
      3: 5,
    };

    this.#lottoList.forEach((lotto) => {
      const rank = lotto.matchRank(RANK_TABLE, this.#winNumbers, this.#bonusNumber);
      if (rank) this.#lottoResults[rank - 1][2] += 1;
    });
  }

  calculatorMoney() {
    this.#totalMoney = this.#lottoResults.reverse().reduce((acc, cur) => {
      this.printWinningResult(cur);
      const addMoney = acc + cur[1] * cur[2];
      return addMoney;
    }, 0);
  }

  printWinningResult(cur) {
    Console.print(`${cur[0]} (${cur[1].toLocaleString()}원) - ${cur[2]}개`);
  }

  printProfit() {
    const profitRate = (this.#totalMoney / parseInt(this.#money, 10)) * 100;
    Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }
}

export default Machine;
