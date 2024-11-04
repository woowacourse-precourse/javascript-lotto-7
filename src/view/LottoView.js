import { Console } from "@woowacourse/mission-utils";
import { UTILS } from "../common/constants.js";
import Lotto from "../model/Lotto.js";
import PurchaseAmount from "../model/PurchaseAmount.js";

export class LottoView {
  static async getPurchaseAmount() {
    while (true) {
      try {
        const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        const amount = Number(input);
        new PurchaseAmount(amount);
        return amount;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async printLottos(lottos) {
    Console.print("");
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto, index) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  static async getWinningNumbers() {
    while (true) {
      try {
        Console.print("");
        const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
        const lotto = new Lotto(input);
        return lotto.getNumbers();
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async getBonusNumber() {
    Console.print("");
    return Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
  }

  static printResults(results) {
    Console.print("");
    Console.print("당첨 통계\n---");
    results.forEach((result) => Console.print(result));
    Console.print(`총 수익률은 ${results.totalReturn}%입니다.`);
  }
}