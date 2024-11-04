import InputView from "../views/InputView.js";
import { validateInputMoney } from "../validator/InputMoney.js";
import { validateWinningNumber } from "../validator/WinningNum.js";
import { validateBonusNumber } from "../validator/BonusNum.js";
import OutputView from "../views/OutputView.js";
import LottoMachine from "../models/LottoMachine.js";
import { Console } from "@woowacourse/mission-utils";
import { LOTTO_STATISTICS } from "../constants/Statistics.js";

class LottoController {
  async #setMoney() {
    const inputMoney = await InputView.readInputMoney();

    return inputMoney;
  }

  async #getValidMoney() {
    let money;
    while (true) {
      try {
        money = await this.#setMoney();
        validateInputMoney(money);
        return money;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async #setWinningNum() {
    const winningNum = await InputView.readWinningNumber();

    return winningNum.split(",").map(Number);
  }

  async #getValidWinningNum() {
    let winningNum;
    while (true) {
      try {
        winningNum = await this.#setWinningNum();
        validateWinningNumber(winningNum);
        return winningNum;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async #setBounsNum() {
    return await InputView.readBounsNumber();
  }

  async #getValidBonusNum() {
    let bounsNum;
    while (true) {
      try {
        bounsNum = Number(await this.#setBounsNum());
        validateBonusNumber(bounsNum);
        return bounsNum;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  #calculateLottoCount(inputMoney) {
    return Math.floor(inputMoney / 1000);
  }

  async #processLottoPurchase(lottoCount) {
    return await OutputView.printLottoCount(lottoCount);
  }

  async purchase() {
    const money = await this.#getValidMoney();
    const lottoCount = this.#calculateLottoCount(money);
    await this.#processLottoPurchase(lottoCount);

    const lottoMachine = new LottoMachine();
    const lottos = lottoMachine.generateLottos(lottoCount);

    OutputView.printLottos(lottos);
    const winningNum = await this.#getValidWinningNum();
    const bonusNum = await this.#getValidBonusNum();

    lottoMachine.calculateLottoStatistics(lottos, winningNum, bonusNum);
    this.#printLottoStatistics(money);
  }

  #printLottoStatistics(totalSpent) {
    Console.print("당첨 통계");
    Console.print("---");

    Object.entries(LOTTO_STATISTICS).forEach(
      ([key, { number, price, count }]) => {
        if (key === "bonus") {
          Console.print(
            `5개 일치, 보너스 볼 일치 (${price.toLocaleString()}원) - ${count}개`
          );
        } else {
          Console.print(
            `${number}개 일치 (${price.toLocaleString()}원) - ${count}개`
          );
        }
      }
    );

    const earningsRate = this.#calculateEarningsRate(totalSpent);
    Console.print(`총 수익률은 ${earningsRate}%입니다.`);
  }

  #calculateEarningsRate(totalSpent) {
    const totalPrize = Object.values(LOTTO_STATISTICS).reduce(
      (acc, { price, count }) => acc + price * count,
      0
    );

    const earningsRate = (totalPrize / totalSpent) * 100;
    return Math.round(earningsRate * 10) / 10;
  }
}

export default LottoController;
